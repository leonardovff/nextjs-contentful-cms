// import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '../../components/layout';
import { getSubjectLists } from '../../modules/subject';
import { Subjects } from '../../components/subjects';
// import '../../styles/globals.css';

export default function SubjectsPage ({subjects}) {
    // const [subjects, setSubjects] = useState([]);
    // useEffect(() => {
    //     fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    //         .then(res => res.json())
    //         .then(data => setSubjects(data))
    // }, []);
    
    return <Layout>
        <Head>
            <title>List of Subjects</title>
        </Head>
        {/* <Script 
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
            src="https://connect.facebook.net/en_US/sdk.js" 
        /> */}
        <Link href="/">Back to home</Link>
        {/* <img src="/images/profile.jpeg" /> */}
        {/* <Image
            src="/images/profile.jpeg" // Route of the image file
            height={444}
            width={444}
            alt="Your Name"
        /> */}
       <Subjects subjects={subjects}></Subjects>
    </Layout>
}

export async function getServerSideProps() {
    // Get external data from the file system, API, DB, etc.
    // const subjects = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    //         .then(res => res.json());
    const { items } = await getSubjectLists();
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
        subjects: items
      }
    }
  }