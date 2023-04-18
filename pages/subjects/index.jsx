import React from "react";
import styled from "styled-components";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./../api/auth/[...nextauth]";

import Link from "next/link";
import Head from "next/head";
// import '../../styles/globals.css';
import Layout from "../../components/layout";
import { getSubjectLists } from "../../modules/subject";
import { Subjects } from "../../components/subjects";
import { CustomLogin } from "../../components/login/custom-login";
import { DefaultLogin } from "../../components/login/default-login";
import { getCsrfToken } from "next-auth/react";
// import { getToken } from "next-auth/jwt";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// const ThemeContext = React.createContext('light');

export default function SubjectsPage({ subjects, user, csrfToken }) {
  return (
    <Layout>
      <Head>
        <title>List of Subjects</title>
      </Head>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            Example using front-end verification (by calling the
            /api/auth/session endpoint)
          </span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <ul class="text-sm lg:flex-grow">
            <li
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              <DefaultLogin />
            </li>
          </ul>
        </div>
      </nav>

      <CustomLogin user={user} csrfToken={csrfToken} />

      <Title>Subjects</Title>
      <Link href="/">Back to home</Link>
      <Subjects subjects={subjects}></Subjects>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions);
  const { items } = await getSubjectLists();
  
  return {
    props: {
      subjects: items,
      user: session ? session.user : null,
      // csrfToken: await getCsrfToken({ req }),
    },
  };
}
