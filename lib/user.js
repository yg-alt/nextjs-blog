export async function getUser () { 
  const res = await fetch('https://pan.ylxb.xyz/api/t-users')
  return res.json()
}