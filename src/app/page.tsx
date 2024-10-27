import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  return <div>Hello, this is your page. The current route is {router.pathname}</div>
}
export default Page