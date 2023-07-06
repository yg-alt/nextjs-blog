import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getUser } from '../lib/user'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData, userList }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>一名合格的前端工程师</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>日志</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   const userList = await getUser()
//   console.log('userList', userList)
//   return {
//     props: {
//       allPostsData,
//       userList,
//     }
//   }
// }

export async function getServerSideProps (context) {
  console.log('context', context.query)
  const allPostsData = getSortedPostsData()
  const userList = await getUser()
  console.log('userList', userList)
  return {
    props: {
      allPostsData,
      userList,
    }
  }
}
