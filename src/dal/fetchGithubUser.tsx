import { IGitUser } from '@/@types/gitUser'
import FormatParams from '@/utils/FormatParams'
 
export async function fetchGithubUser({
  username,
  params,
}: {
  username: string
  params?: string
}) {
  const stringParams = params ? FormatParams(params) : ''
  const res = await fetch(
    `https://api.github.com/users/${username}?${stringParams}`,
    {
      next: {
        revalidate: 60,
      },
    },
  )
  if (!res.ok) throw new Error('failed to fetch user')
  return res.json().then((res) => {
    return res as IGitUser
  })
}
