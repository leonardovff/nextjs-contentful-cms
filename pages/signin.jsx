import { getProviders, signIn } from "next-auth/react";


export default function SignIn({ providers }) {
  return (
    <>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}


export async function getServerSideProps(context) {
    console.log( await getProviders(context));
    return {
      props: { providers: await getProviders(context) },
    };
};