import React, { useContext } from "react";
import styled from "styled-components";

import { getServerSession } from "next-auth/next"
import { authOptions } from "./../api/auth/[...nextauth]"

import Link from 'next/link';
import Head from 'next/head';
// import '../../styles/globals.css';
import Layout from '../../components/layout';
import { getSubjectLists } from '../../modules/subject';
import { Subjects } from '../../components/subjects';
import { Login } from "../../components/login";
// import { getToken } from "next-auth/jwt";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// const ThemeContext = React.createContext('light');

export default function SubjectsPage ({subjects, user}) {
    return <Layout>
        <Head>
            <title>List of Subjects</title>
        </Head>
        <h3>Example using front-end verification (by calling the /api/auth/session endpoint)</h3>
        <Login/>

        <h3>Example using server-side verification</h3>
        {user ? <>
            <p>{user.name}</p>
            <a>Sing Out</a>
        </> : <a>Sing In</a>}
        <Title>Subjects</Title>
        <Link href="/">Back to home</Link>
        <Subjects subjects={subjects}></Subjects>
    </Layout>
}

export async function getServerSideProps({req, res}) {    
    const session = await getServerSession(req, res, authOptions);
    const { items } = await getSubjectLists();
    return {
      props: {
        subjects: items,
        user: session? session.user : null
      }
    }
}