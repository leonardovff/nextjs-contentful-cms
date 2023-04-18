import Link from "next/link";
import { useState } from "react";

export function CustomLogin({user, csrfToken}) {

    const [isToShowTheLoginForm, setIsToShowTheLoginForm]= useState(false);
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
                Example using server-side verification
            </span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <ul class="text-sm lg:flex-grow">
                    <li
                        href="#responsive-header"
                        class="block relative mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        {user?.name ? <>
                            <p>{user?.name}</p>
                            <Link href="/api/auth/signout"><a>Sing Out</a></Link>
                        </>
                        : <a onClick={() => setIsToShowTheLoginForm(true)}>Sing In</a>}
                        { isToShowTheLoginForm && (<LoginForm />)}
                    </li>
                </ul>
            </div>
        </nav>
    )
};
function LoginForm(){
    
    return (
        <div class="absolute top-0 left-0 w-screen max-w-xs ">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/api/auth/callback/credentials">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
        </div>
    )
}