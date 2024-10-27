// import the necessary modules
import { NextPage } from 'next'
import { useRouter } from 'next/router'

// define the component
const AboutPage: NextPage = () => {
  const router = useRouter()
  
  function goToHome(){
    router.push('/')
  }

  return (
    <div>
      <h1>About</h1>
      <p>This is the About page for the startup. More information will be provided here based on a clear startup idea.</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  )
}

// export the component
export default AboutPage