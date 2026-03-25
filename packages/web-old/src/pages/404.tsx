import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

const Custom404 = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div
        style={{
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container className="text-center">
          <h1>404</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="/">Return to homepage</a>
        </Container>
      </div>
    </>
  );
};

export default Custom404;