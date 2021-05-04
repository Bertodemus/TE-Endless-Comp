import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Steps from "../components/steps";

// getStaticProps is a function that is native to Nextjs, it tells NextJS to pre-render this page at build time, using data returned by the function
export async function getStaticProps() {
	const url =
		"https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";
	const stepsData = await fetch(url);
	return {
		props: {
			stepsData: await stepsData.json(),
		},
	};
}

export default function Home({ stepsData }) {
	const sortedStepsData = stepsData.sort(function (a, b) {
		return a.stepNumber - b.stepNumber;
	});
	return (
		<div>
			<Head>
				<title>Endless</title>
				<meta
					name='Endless Comp'
					content='Submission for the front-end dev position'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.container}>
				<b className={styles.headerBkg} />
				<div className={styles.header}>
					<Image
						src='/images/logo-endless.svg'
						alt='Endless Name'
						width={81}
						height={12}
						className={styles.filtersvg}
					/>
				</div>
				<div className={styles.textOver}>
					<h5>{`New Games & Accessories`}</h5>
					<h1>{`Monthly packages.`}</h1>
					<h1>{`Excitement delivered daily.`}</h1>
					<p>
						What's the best way to shop for the latest video games and
						peripherals? How about never shopping at all? You'll get new stuff
						on your doorstep - every month.
					</p>
					<button className={styles.startButton}>GET STARTED</button>
				</div>
				<div className={styles.hero}>
					<Image
						src='/images/photo-couch_2x.jpg'
						alt='Hanging out on the couch'
						width={3120}
						height={2010}
					/>
				</div>
				<div className={styles.howIt}>
					<h3 className={styles.howit}>How It Works</h3>
				</div>
				<Steps steps={sortedStepsData} />
			</main>
		</div>
	);
}
