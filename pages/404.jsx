import style from '../styles/Error.module.css';
import React from 'react';
import Head from 'next/head';

import { HiHome } from 'react-icons/hi';
export default class Error404 extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>2Lost4Discord - 404</title>
                </Head>
                <div className={style.align}>
                    <div className={style.container}>
                        <div className={style.align}>                     
                            <div className={style.container}> 
                            <img src='https://media.discordapp.net/attachments/883817635081506886/943903972241055854/404.jpeg' style={{ width: '100%' }} />
                        </div>
                        <button onClick={() => window.location.href = `/`} className='button' style={{ marginTop: 10 }}>
                            <HiHome style={{ height: 22, width: 22, marginTop: 1.8, marginRight: 5 }} />
                            <div>Go Home</div>
                        </button>
                    </div>
                </div>
            </>
        );
    };
};
