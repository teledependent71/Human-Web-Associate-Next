import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Human Web Associate</title>
          <meta property="og:title" content="test-page - Human Web Associate" />
        </Head>
        <DataProvider
          renderSuccess={(context_mpllxh) => (
            <>
              <h1 id={context_mpllxh?.id}>Heading</h1>
            </>
          )}
          params={{
            projectId: '3bd8eb33-2aaa-4620-87bf-d7ccd04d0245',
            query:
              'query MyQuery{TypeWithRichText{_meta{createdAt updatedAt id}title content{json connections{__typename  }}}}',
            attribute: 'id',
            id: '2',
          }}
          initialData={props.contextMpllxhProp}
          persistDataDuringLoading={true}
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
    const contextMpllxhProp = await getEntityByAttribute({
      ...context?.params,
      projectId: '3bd8eb33-2aaa-4620-87bf-d7ccd04d0245',
      query:
        'query MyQuery{TypeWithRichText{_meta{createdAt updatedAt id}title content{json connections{__typename  }}}}',
      attribute: 'id',
      id: '2',
    })
    if (!contextMpllxhProp?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        contextMpllxhProp: contextMpllxhProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
