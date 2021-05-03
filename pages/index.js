import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { getStepsData } from '../lib/steps'

export async function getStaticProps() {
  const url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'
  const stepsData = await fetch(url)
  return {
    props: {
      stepsData: await stepsData.json()
    }
  }
}
 
export default function Home({stepsData}) {
  let sortedStepsData = stepsData.sort(function (a, b) {
    return a.stepNumber - b.stepNumber;
  });

  return (
    <div>
      <Head>
        <title>Endless</title>
        <meta name="Endless Comp" content="Submission for the front-end dev position" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <b className={styles.headerBkg}/>
        <div className={styles.header}>
            <Image src="/images/logo-endless.svg" alt="Endless Name" width={81} height={12} className={styles.filtersvg}/>
        </div>
          <div className={styles.textOver}>
              <h5>{`New Games & Accessories`}</h5>
              <h1>{`
                  Monthly packages.
                  Excitement delivered daily.
                  `}</h1>
              <p>What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.</p>
              <button className={styles.startButton}>GET STARTED</button>
            </div>
          <div className={styles.hero}>
            <Image src="/images/photo-couch_2x.jpg" alt="Hanging out on the couch" width={3120} height={2010}/>
          </div>
        <div className={styles.howIt}>
        <h3 className={styles.howit}>
          How It Works
        </h3>
        </div>
        {sortedStepsData.map((step, index) => {
            step.versionContent.sort(function (a, b) {
              return new Date(b.effectiveDate) - new Date(a.effectiveDate);
            })
            let stepStyle = 'step' + (index + 1);
            let title = sortedStepsData[index].versionContent[0].title;
            return (
              <div key={stepStyle} className={`${styles[stepStyle]} ${styles.styleSteps}`}>
                <h1>{'0'+(index + 1)}</h1>
                <h6>{title.toUpperCase()}</h6>
                <p>{sortedStepsData[index].versionContent[0].body}</p>
              </div>
            );
          })}


        {/*
          <a href="https://nextjs.org/docs" className={`${styles.card} ${styles.steps}`}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <h5>Something</h5>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
