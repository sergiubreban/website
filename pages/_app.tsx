import '../styles/globals.css'
import { ChakraProvider, Text, Center, extendTheme } from "@chakra-ui/react"
import Head from 'next/head'
import Layout from '../components/Layout'


const BrbTheme = extendTheme({
  colors: {
    dark: '#1A202C'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  textStyles: {
    h2: {
      fontSize: ['1.5rem', '1.7rem'],
      lineHeight: ['25px', '45px']
    },
    h3: {
      fontSize: ['1.2rem', '1.4rem'],
      lineHeight: ['17px', '22px']
    },
    body: {
      fontSize: ['18px', '16px'],
      lineHeight: ['36px', '32px']
    },
  }
})


function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={BrbTheme}>
    <Layout>
      <Head>
        <title>Sergiu Breban</title>
        <meta name="description" content="Sergiu Breban | Personal Website | Contact" />
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,500,600,700' rel='stylesheet' />
        <meta property="og:title" content="Sergiu Breban | Freelancer | Contractor" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Sergiu Breban | Personal Website | Contact" />
        <meta property="og:image" content="http://breban.ro/me.png" />
        <meta property="og:url" content="https://breban.ro" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="icon" href="/logo.jpeg" /> */}
      </Head>
      <Component {...pageProps} />
      <footer >
        <Center w='100%' h='100px'>
          <Text fontSize='12px'> © 2021 breban.ro, All rights reserved.</Text>
        </Center>
      </footer>
    </Layout>
  </ChakraProvider>
}

export default MyApp
