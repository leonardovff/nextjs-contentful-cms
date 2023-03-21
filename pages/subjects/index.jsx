import React, { useContext } from "react";
import styled from "styled-components";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
// import '../../styles/globals.css';
import Layout from '../../components/layout';
import { getSubjectLists } from '../../modules/subject';
import { Subjects } from '../../components/subjects';
import { Login } from "../../components/login";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const ThemeContext = React.createContext('light');

function Father({teste, children}){
    return <>{children}</>;
}
function ChildA({children}){
    return <>{children}</>;
}
function ChildB({children}){
    return <><ChildC></ChildC></>;
}

function ChildC({children}){
    const value = useContext(ThemeContext);
    return <><Title>Oláaaaa, {value}</Title></>;
}

export default function SubjectsPage ({subjects}) {
    const teste= 'olá';
    
    return <Layout>
        <Head>
            <title>List of Subjects</title>
        </Head>
        <Login/>
        <Title>Subjects</Title>
        <Link href="/">Back to home</Link>
        <Subjects subjects={subjects}></Subjects>
        <ThemeContext.Provider>
            <Father teste={teste}>
                <ChildA>
                    <ChildB></ChildB>
                </ChildA>
            </Father>
        </ThemeContext.Provider>
    </Layout>
}

export async function getServerSideProps() {
    const { items } = await getSubjectLists();
    return {
      props: {
        subjects: items
      }
    }
}

// const [subjects, setSubjects] = useState([]);
// useEffect(() => {
//     fetch('https://my-json-server.typicode.com/typicode/demo/posts')
//         .then(res => res.json())
//         .then(data => setSubjects(data))
// }, []);
// Get external data from the file system, API, DB, etc.
// const subjects = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
//         .then(res => res.json());
/* <Script 
    strategy="lazyOnload"
    onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
    }
    src="https://connect.facebook.net/en_US/sdk.js" 
/> */