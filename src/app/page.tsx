import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()

  const navigateToAbout = () => {
    router.push('/about')
  }

  return (
    <div>
      <h1>Welcome to the Startup Project</h1>
      <p>This is the home page of the app.</p>

      <button onClick={navigateToAbout}>
        Go to About Page
      </button>
    </div>
  )
}

export default HomePage