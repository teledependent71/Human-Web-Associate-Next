import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Human Web Associate</title>
          <meta property="og:title" content="test-page - Human Web Associate" />
        </Head>
        <DataProvider
          renderSuccess={(context_ev3wqo) => (
            <>
              <h1 id={context_ev3wqo?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextEv3wqoProp}
          persistDataDuringLoading={true}
          key={props?.contextEv3wqoProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextEv3wqoProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextEv3wqoProp: contextEv3wqoProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
