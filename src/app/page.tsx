import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  title: string
}

const Startup: React.FC<Props> = ({title}) => {
  const router = useRouter();

  // redirect to a specific route
  const redirect = () => {
    router.push("/somePage");
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={redirect}>Go to some page</button>
    </div>
  )
}

export default Startup;