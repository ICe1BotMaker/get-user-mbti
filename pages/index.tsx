import Layout from 'components/Layout'
import styles from 'styles/Home.module.css'

import Lottie from 'react-lottie'
import ironMan from 'public/images/iron-man.json'
import { Button } from 'antd-mobile'
import { useRouter } from 'next/router'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ironMan,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

export default function Home() {
  const router = useRouter();
  const handleClickGoToTest = () => {
    router.push(`/test`)
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>

      <div className={styles.title}>
        If I'm Hero?
        <br />
        <br />
        Start Test to do Mavel Charactor!
      </div>
      <Button className={styles.button} onClick={handleClickGoToTest}>Go Test</Button>
    </Layout>
  )
}
