import { NextPage } from 'next'
import { AppRouter } from '../routers/AppRouter' // You need to define this file based on your needs

const HomePage: NextPage = () => {
  return (
      <AppRouter>
         <h1>Welcome to Our Startup</h1>
         {/* Add more structure and content here */}
      </AppRouter>
  )
}

export default HomePage