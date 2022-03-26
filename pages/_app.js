import '../styles/globals.css';
import '../styles/layout.css';
import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';

import { AiFillHeart } from 'react-icons/ai';

export default function render({ Component, pageProps }) {

    return (
        <>
            <Head>
                <script async src="https://arc.io/widget.min.js#gqtowFo9"></script>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

                <meta property='title' content='2Lost4Discоrd' />
                <meta property='description' content="Hello, I am 2Lost4Discord or Losti for short. This is my own website where you can find more about me" />

                <meta name="twitter:title" content="2Lost4Discоrd" />
                <meta name="twitter:description" content="Hello, I am 2Lost4Discord or Losti for short. This is my own website where you can find more about me" />
                <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/951696348388917268/955158941640306728/907041503480782858.webp" />

                <meta property='og:title' content='2Lost4Discоrd' />
                <meta property='og:description' content="Hello, I am 2Lost4Discord or Losti for short. This is my own website where you can find more about me" />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://cdn.discordapp.com/attachments/951696348388917268/955158941640306728/907041503480782858.webp' />

                <meta name='theme-color' content='#2ecc71' />
                <title>2Lost4Discоrd</title>
                <link rel='shortcut icon' type='image/x-icon' href='https://cdn.discordapp.com/attachments/951696348388917268/955158941640306728/907041503480782858.webp' />
            </Head>
            <body>
                <Layout />
                <div className='set-luna'>
                    <Link href='https://waya.one/go/luna'>
                        <a>Made&nbsp;with&nbsp;<AiFillHeart style={{ position: 'relative', top: 2 }} />&nbsp;by&nbsp;Luna</a>
                    </Link>
                </div>
                <Component {...pageProps} />
            </body>
        </>
    );
};
