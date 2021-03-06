import style from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { BiWindowAlt, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2 } from 'react-icons/hi';

const cards = [{
    name: 'Lostis Dreamworld',
    icon: 'https://cdn.discordapp.com/attachments/955930340571095040/971850209971826819/Screenshot_2022-05-04_185556.png',
    description: 'That is my own community, feel free to join it',
    url: 'https://discord.gg/4RJuppzbUG',
    position: `Owner`
}, {
    name: 'Discord Networking',
    icon: 'https://media.discordapp.net/attachments/799260287517327421/955931184708349992/dn.png',
    description: 'Server for moderators, developers, artists to help each other and exchange information',
    url: 'https://discord.gg/arp9nM38K6',
    position: `Moderator`
},{
    name: 'AntiScam',
    icon: 'https://cdn.discordapp.com/attachments/955930340571095040/955937069925040128/unknown.png',
    description: 'Bot to keep your server safe against scam links. Easy2use',
    url: 'https://invite.losti.xyz',
    position: `Founder, Developer`,
    bot: 2
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
                            <img src={user?.nickavatar || user?.avatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{width > 600 ? (user?.nickname || user?.username) : 'Losti'}</text>
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
                            <strong style={{ fontSize: 27 }}>???? About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                            I am <strong>2Lost4Discord</strong> or for short, <strong>Losti</strong>.<br />
                            I like skateboarding and mountain biking. 
                            and also like to meet <strong>friends</strong> and spend <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/4Q87pfTWqC')}>time on Discord</button>. 
                            I also <strong>program</strong> a little bit in my <strong>free time.</strong> <br />
                                Learn more about my <strong>story and my projects</strong> <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/4Q87pfTWqC')}>in my server</button> 
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>???? Things i like</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                ???&nbsp; Skateboard<br />
                                ???&nbsp; Driving my MTB<br />
                                ???&nbsp; Meeting Friends<br />
                                ???&nbsp; Moderating<br />
                                ???&nbsp; Developing
                            </div>
                              <br />
                            <strong style={{ fontSize: 27 }}>???? Contact</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                You want to contact me or just talk? <br />
                                Join my <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/VM77HTNXrt')}>Discord server</button> or contact me over E-Mail: <strong>help@losti.xyz</strong>
                            </div>
                        </div>
                        <div className={user.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(99, 90, 112)' }}> ??? {activity.name.toLowerCase().includes(`music`) ? 'Listening' : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? 'Developing' : (activity.name.toLowerCase().includes(`github`) ? 'Browsing' : 'Playing')))}</text>
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
                                     <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{card.name}</strong>
                                    {card?.bot > 0 ?
                                        <badge style={{ backgroundColor: `#5865f2`, fontWeight: 600, fontFamily: 'Open Sans, sans-serif', fontSize: 13, padding: 2, paddingRight: 6, paddingLeft: (card?.bot > 1 ? 19 : 6), borderRadius: 4, color: '#fff', position: 'relative', marginLeft: 4 }}>
                                            {card?.bot > 1 ? <svg style={{ position: 'absolute', top: 4, left: 2.5 }}>
                                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#fff"></path>
                                            </svg> : <></>}
                                            BOT
                                        </badge>
                                        : <></>
                                    }
                                    {card.position ? <text style={{ color: 'rgb(99, 90, 112)' }}> ??? {card.position}</text> : <></>}
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
    try {
        user = await fetch(`https://whois.waya.one/losti`).then(res => res.json()).catch(() => { return; });
    } catch (e) { error = e }
    if (user?.status !== 200 || !user?.content?.id) {
        error = true;
        user = { content: {
            username: `2Lost4Disc??rd`,
            nickname: `Losti`,
            avatar: `https://cdn.discordapp.com/attachments/955930340571095040/970447547242004540/ab67616d0000b2733111aa733bffe83139371e2c.jpg`,
            nickavatar: `https://cdn.discordapp.com/attachments/955930340571095040/970447547242004540/ab67616d0000b2733111aa733bffe83139371e2c.jpg`,
            banner: `https://cdn.discordapp.com/banners/421991668556759042/a8a26730b0f52b232bee5e692e789077.png?size=600`,
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
