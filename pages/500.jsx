import style from '../styles/Error.module.css';
import React from 'react';
import Head from 'next/head';
export default class Error500 extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>2Lost4Discord - 500</title>
                </Head>
                <div className={style.align}>
                    <div className={style.container}>
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>500</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}> ⌋ Ohh this is awkward, looks like we have an Internal server error</text> <br />
                    </div>
                </div>
            </>
        );
    };
};
