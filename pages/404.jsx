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
                        <img src='https://media.discordapp.net/attachments/883817635081506886/943903972241055854/404.jpeg' style={{ width: '100%' }} />
                    </div>
                </div>
            </>
        );
    };
};
