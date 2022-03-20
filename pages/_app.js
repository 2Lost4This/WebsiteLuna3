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
                <meta property='description' content="I am 2Lost4Discord or for short, Losti" />

                <meta name="twitter:title" content="2Lost4Discоrd" />
                <meta name="twitter:description" content="I am 2Lost4Discord or for short, Losti" />
                <meta name="twitter:image" content="https://cdn.discordapp.com/icons/732576939520426044/820e7b48c2036a7c3ba32784d430f1a0.png" />

                <meta property='og:title' content='2Lost4Discоrd' />
                <meta property='og:description' content="I am 2Lost4Discord or for short, Losti" />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://cdn.discordapp.com/icons/732576939520426044/820e7b48c2036a7c3ba32784d430f1a0.png' />

                <meta name='theme-color' content='#2ecc71' />
                <title>2Lost4Discоrd</title>
                <link rel='shortcut icon' type='image/x-icon' href='https://cdn.discordapp.com/icons/732576939520426044/820e7b48c2036a7c3ba32784d430f1a0.png' />
            </Head>
            <body>
                <Layout />
                <div className='set-luna'>
                    <Link href='https://waya.one/go/luna'>
                        <a>Credit&nbsp;<AiFillHeart style={{ position: 'relative', top: 2 }} />&nbsp;to&nbsp;Luna</a>
                    </Link>
                </div>
                <Component {...pageProps} />
            </body>
        </>
    );
};
