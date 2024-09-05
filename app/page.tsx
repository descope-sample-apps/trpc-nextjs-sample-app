"use client";

import { useDescope, useSession, useUser } from "@descope/nextjs-sdk/client";
import Head from "next/head";
import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import styles from "../styles/Home.module.css";
import { trpc_api } from './utils/trpc';
import { useQueryClient } from '@tanstack/react-query'
import { getQueryKey } from '@trpc/react-query';



const getUserDisplayName = (user: any) =>
  user?.name || user?.externalIds?.[0] || "";
  export default trpc_api.withTRPC(function Home() {
  const { isAuthenticated } = useSession();
  const { user } = useUser();
  const sdk = useDescope();
  const queryClient = useQueryClient();
  const userKey = getQueryKey(trpc_api.hello);
  
    // some of the fields included in trpc queries, can be used for testing
  const {isError, data, error, refetch, isFetching } = trpc_api.hello.useQuery()

  const utils = trpc_api.useUtils();

  const onLogout = () => {
    sdk.logout();
    queryClient.removeQueries({ queryKey: userKey });
  }

  const [apiFormResult, setApiFormResult] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    //refetches the trpc query on submit and generates alert
    () => refetch();
    event.preventDefault();
    console.log(data?.secret);
    const resultMessage = `${data?.secret}`;
    setApiFormResult(resultMessage);
    utils.invalidate();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to the{" "}
          <a href="https://github.com/descope-sample-apps/trpc-nextjs-sample-app">
            Descope Next.js TRPC Sample App
          </a>
        </h1>
        {!isAuthenticated && (
          <>
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
          <div className={styles.description}>Submit TRPC Form</div>
            <form onSubmit={handleSubmit}>
              <button data-cy="api-form-button" type="submit">
                Submit
              </button>
            </form>
            <div>{'tRPC Query: ' + apiFormResult}</div>
          </>
        )}
        {isAuthenticated && (
          <>
            <div className={styles.description}>
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div className={styles.description}>Submit TRPC Form</div>
            <form onSubmit={handleSubmit}>
              <button data-cy="api-form-button" type="submit">
                Submit
              </button>
            </form>
            <div>{'tRPC Query: ' + apiFormResult}</div>
          </>
        )}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </main>
    </div>
  );
});
