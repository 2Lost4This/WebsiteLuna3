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
                <script async src="https://arc.io/widget.min.js#sqvWfDKJ"></script>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

                <meta property='title' content='2Lost4Discоrd' />
                <meta property='description' content="I am 2Lost4Discord or for short, Losti" />

                <meta name="twitter:title" content="2Lost4Discоrd" />
                <meta name="twitter:description" content="I am 2Lost4Discord or for short, Losti I like skateboarding and mountain biking. I also like to meet friends and spend time on Discord. I also program a little bit in my free time Learn more about my story and my projects" />
                <meta name="twitter:image" content="https://cdn.waya.one/r/e4ad8f5b91253285ab8e592f7dcad965.png" />

                <meta property='og:title' content='2Lost4Discоrd' />
                <meta property='og:description' content="I am 2Lost4Discord or for short, Losti I like skateboarding and mountain biking. I also like to meet friends and spend time on Discord. I also program a little bit in my free time Learn more about my story and my projects" />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://cdn.waya.one/r/e4ad8f5b91253285ab8e592f7dcad965.png' />

                <meta name='theme-color' content='#f19bec' />
                <title>2Lost4Discоrd</title>
                <link rel='shortcut icon' type='image/x-icon' href='https://cdn.waya.one/r/e4ad8f5b91253285ab8e592f7dcad965.png' />
            </Head>
            <body>
                <Layout />
                <div className='set-luna'>
                    <Link href='https://waya.one/go/luna'>
                        <a>Made with&nbsp;<AiFillHeart style={{ position: 'relative', top: 2 }} />&nbsp;by&nbsp;Luna</a>
                    </Link>
                </div>
                <Component {...pageProps} />
            </body>
        </>
    );
};
