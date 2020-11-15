import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../core/navbar';


function stub() {

}

export default function Help() {
    return (
        <div className={styles.container}>
            {Navigation(stub, stub, false)}
            <Head>
                <title>Durham Lecture Tracker</title>
                <link rel="icon" href="/durhack.png" />
            </Head>
            <main className={styles.main}>
                <center className={styles.help}>
                    Just a brief explanation about what our app aims to do
                    <br/><br/>
                    <b>Problem</b>
                    <p>With online lectures often being asyncronous and not matching directly with traditional lecture slots students can lose track of where they are meant to be</p>

                    <p>They often find it hard to keep up across all their modules simply because they don't understand how the content is ordered</p>
                    <br/>
                    <b>Aims</b>
                        <p>To provide an interface to track your progress through an online course</p>
                        <p>To show where the lecturer expects you to be at in the course</p>
                        <p>To show where the average student has got to</p>
                        <p>To allow you to mark lecturers watched, complete online tests to confirm understanding</p>
                        <p>To gamify these features to make it enjoyable for the student</p>

                    <br/>
                    <b>What we've achieved</b>
                    <p>We haven't managed to create the complete interface - more a design mock-up for the end product built in Next.js running on AWS Amplify</p>
                    <p>You can choose mock students, see their randomly generated progress in some modules</p>
                    <p className={styles.green}>The green marks where the student has reached</p>
                    <p className={styles.underover}>The under and over lined section is where the lecturer expects the student to be</p>
                    <p>We also have a leaderboard, again with stub data, to show the gamification features we hope to build</p>

                    <br/>
                    <b>What we want to do</b>
                    <p>Ideally this would be built directly into DUO to allow it to automatically sync with watched lecturers, recieve formative and summative marks from assignments
                        to allow students the simplest possible experience
                    </p>
                </center>
            </main>
            <footer className={styles.footer}>
                <a
                href="https://github.com/SimpsonThomas"
                target="_blank"
                rel="noopener noreferrer"
                >
                Built at Durhack{' '}
                <img src="/Github-Mark.png" alt="Github Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}