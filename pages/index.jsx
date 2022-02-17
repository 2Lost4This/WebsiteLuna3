import config from '../config.json';
import style from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { BiWindowAlt, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2 } from 'react-icons/hi';

const cards = [{
    name: 'MY Server',
    icon: 'https://cdn.discordapp.com/icons/732576939520426044/820e7b48c2036a7c3ba32784d430f1a0.webp?size=2048',
    description: 'My own Server :D.',
    url: 'https://discord.gg/4Q87pfTWqC',
    position: `Owner`
}, {
    name: 'Discord Networking',
    icon: 'https://cdn.discordapp.com/icons/856270069612281876/fddb971d0e1541577e46a51a7a0e0178.webp?size=2048',
    description: 'Server for moderators, developers, artists to help each other and exchange information',
    url: 'https://discord.gg/vWcEAX5G4B',
    position: `Moderator`
}, {
    name: 'Braxic/ Wannabe',
    icon: 'https://cdn.discordapp.com/icons/443905850634010625/a_a0aefb5be3659345ea422315dd570d1b.webp?size=2048',
    description: 'Community Server from the 2 Youtuber called "Braxic" and "WannaBe"',
    url: 'https://discord.gg/bxwb',
    position: `Moderator`
},  {
    name: 'Chill Bot Support',
    icon: 'https://cdn.discordapp.com/icons/917335141838385163/9555ca13719a54fab199960828773dc9.webp?size=2048',
    description: 'Chill is a discord bot that allows you to watch youtube videos in a voice channel via the Discord Watch Together feature, with your friends!',
    url:'https://discord.gg/dkQ6RS67nw',
    position: `Moderator`
}];

export default function Homepage({ user, error }) {

    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    });
    return (
        <>
            <div className={style.align}>
                <div className={style.container}>
                    <div className={style.align}>
                        <div alt='banner' className={style.banner} style={{ background: `url('${user?.banner}') no-repeat left top`, backgroundSize: 'cover' }}></div>
                        <div className={style.on_banner} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68%, rgb(30, 26, 34) 100%)', display: user?.banner ? '' : 'none' }} />
                    </div>
                    <div className={style.me}>
                        <div className={style.profilepicture} style={{ backgroundColor: (user?.status?.state?.color || `#747F8D`) }}>
                            <img src={user?.nickavatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{user?.nickname}</text>
                            {(user?.status?.emote || user?.status?.text) ?
                                <div style={{ display: 'felx' }}>
                                    {user?.status?.emote ? <img src={user?.status?.emote} style={{ width: 24, borderRadius: 3, marginTop: 4, marginRight: 3 }} draggable={false} /> : <></>}
                                    <text style={{ position: 'relative', top: -5, left: 4, color: '#CCCCCC', fontSize: 20 }}>{user?.status?.text ? user?.status?.text : ``}</text>
                                </div>
                                : <></>
                            }
                        </div>
                        <div className={style.badges} style={(user?.status?.emote || user?.status?.text) ? { marginTop: 8 } : { marginTop: width > 540 ? 14 : -14 }}>
                            <button className={style.badge} onClick={() => window.open('https://discord.gg/4Q87pfTWqC')}> <BiWindowAlt style={{ height: 22, width: 22, marginRight: 4 }} /> Discord Server </button>
                            <button className={style.badge} onClick={() => window.open('https://github.com/2Lost4This')}> <BiCodeAlt style={{ height: 22, width: 22, marginRight: 4 }} /> GitHub </button>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.readme}>
                            <strong style={{ fontSize: 27 }}>👋 About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                            I am <strong>2Lost4Discord</strong> or for short, <strong>Losti</strong>.<br />
                            I like skateboarding and mountain biking. 
                            and also like to meet <strong>friends</strong> and spend <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/4Q87pfTWqC')}>time on Discord</button>. 
                            I also <strong>program</strong> a little bit in my <strong>free time.</strong> <br />
                                Learn more about my <strong>story and my projects</strong> <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/4Q87pfTWqC')}>in my server</button> 
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>🪄 Things i like</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                •&nbsp; Skateboard<br />
                                •&nbsp; Driving my MTB<br />
                                •&nbsp; Meeting Friends<br />
                                •&nbsp; Moderating<br />
                                •&nbsp; Developing
                            </div>
                        </div>
                        <div className={user.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {activity.name.toLowerCase().includes(`music`) ? 'Listening' : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? 'Developing' : (activity.name.toLowerCase().includes(`github`) ? 'Browsing' : 'Playing')))}</text>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ position: 'relative', marginTop: 6 }}>
                                            {activity.assets.large.image ?
                                                <img src={activity.assets.large.image} style={{ height: 80, borderRadius: 4 }} draggable={false} alt={`${activity.name}'s big icon`} title={activity.assets.large.text} />
                                                : <></>
                                            }
                                            {activity.assets.small.image ?
                                                <img src={activity.assets.small.image} style={{ height: 27, position: 'absolute', top: 62, left: 66, backgroundColor: '#201d24', borderRadius: 10, outline: '#201d24 solid 0.2rem' }} draggable={false} alt={`${activity.name}'s small icon`} title={activity.assets.small.text} />
                                                : <></>
                                            }
                                        </div>
                                        <div style={{ marginTop: 24, marginLeft: 8 }}>
                                            <div style={{ display: 'flex', marginBottom: 2 }}>
                                                <HiOutlineFolder style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.details?.length >= 70 ? `${activity.details.slice(0, -(activity.details?.length - 70 + 3))}...` : activity.details}</div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: 2 }}>
                                                <HiOutlineMenuAlt2 style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.state?.length >= 70 ? `${activity.state.slice(0, -(activity.state?.length - 70 + 3))}...` : activity.state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cards.length > 0 ? style.section : ''} style={{ marginBottom: width > 540 ? 20 : 60 }}>
                            {cards.map((card) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={card.name}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{card.name}</strong>{card.position ? <text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {card.position}</text> : <></>}
                                    <div style={{ marginTop: 4, display: 'flex' }}>
                                        <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22 }} />
                                        <div style={{ marginTop: 2 }}>&nbsp;{card.description}</div>
                                    </div>
                                    <button style={{ marginTop: 4, display: 'flex', color: 'currentColor', cursor: 'pointer' }} onClick={() => window.open(card.url)}>
                                        <HiOutlineLink style={{ minHeight: 21, minWidth: 21 }} />
                                        <div className='link' style={{ marginTop: 2, fontSize: '1.1rem', position: 'relative', bottom: 3 }}>&nbsp;{card.url.replace(/https:\/\//, ``)}</div>
                                    </button>
                                    <img src={card.icon} className={style.icon} draggable={false} alt={`${card.name}'s icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {error === true ?
                    <div className={style.error} id='error'>
                        <strong><HiOutlineExclamation style={{ minHeight: 23, minWidth: 23, position: 'relative', top: 5 }} /> ERROR:</strong>
                        <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
                            Failed to fetch user data; <br />
                            Using preconfigured data;
                        </div>
                        <button style={{ position: 'absolute', top: 8, right: 8, display: 'flex' }} onClick={() => { document.getElementById('error').className += ' Home_fadeout__2jQec'; setTimeout(() => { document.getElementById('error').style.display = 'none' }, 900) }} >
                            <HiX /> <div style={{ position: 'relative', bottom: 2 }}>CLOSE</div>
                        </button>
                    </div>
                    : <></>
                }
            </div>
        </>
    );
};

Homepage.getInitialProps = async () => {
    
    let user = {};
    let error = false;
    if (config.api.url && config.api.path) try {
        user = await fetch(`https://api.losti.xyz/`).then(res => res.json()).catch(() => { return; });
    } catch (e) { error = e }
    if (user?.status !== 200 || !user?.content?.id) {
        error = true;
        user = { content: {
            username: `2Lost4Discоrd`,
            nickname: `Losti`,
            avatar: `https://cdn.discordapp.com/avatars/421991668556759042/95885955696dcf7c327f996ae99f92cd.png?size=1024`,
            nickavatar: `https://cdn.discordapp.com/avatars/421991668556759042/95885955696dcf7c327f996ae99f92cd.png?size=1024`,
            banner: `https://cdn.discordapp.com/banners/421991668556759042/a_60bfad3b0ec279b6916ef3c566323a86.gif?size=600`,
            status: {
                state: {
                    text: `Unknown`,
                    color: `#747F8D`
                },
                emote: null,
                text: null
            },
            activities: [],
            accentColor: `b6334c`
        }};
    };

    return { user: user?.content, error: error };
};
