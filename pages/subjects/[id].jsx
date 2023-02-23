import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getSubject } from '../../modules/subject';

export default function Subject({subject}) {
  console.log()
  return <>
    <Head>
      <title>Subject: {subject.fields.title}</title>
    </Head>
    <Layout>
      <Link href="/subjects">Back to subjects</Link>
      <h1>{subject.fields.title}</h1>
      <h2>Overview & lesson objectivs</h2>
      <p>{subject.fields.description}</p>
      {/* <p>{subject.fields.lessonPlan}</p> */}
      {/* <p>{subject.fields.additionalResources}</p> */}
    </Layout>
  </>;
}

export async function getServerSideProps({params: { id }}) {
    // Get external data from the file system, API, DB, etc.
    // const subject = await fetch('https://my-json-server.typicode.com/typicode/demo/posts/'+ id)
    //         .then(res => res.json());
    const subject = await getSubject(id);
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
        subject
      }
    }
  }