import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { forwardRef } from 'react'
import cvLink from '../assets/cvLink.pdf'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import Linkedin from '../assets/linkedin.png'
import Youtube from '../assets/youtube.png'
import Restaurant from '../assets/restaurant.png'
import Spotify from '../assets/spotify.png'
import Gym from '../assets/gym.png'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const WorkDiv = styled.div`
    display: absolute;
    position: relative;
    flex-direction: row;
    width: 100vw;
    height: 100%;
    padding: 20px;
    overflow-x: hidden !important;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    text-decoration: none;
    list-style: none;
    color: #025a4e;
`

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    height: fit-content;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const Left = styled.div`
    display: flex;
    height: 100%;
    left: 20;
    margin: 30px;
    margin-top: 100px;
    flex-direction: column;
`

const Right = styled.div`
    display: flex;
    height: 100%;
    margin-top: -1000px;
    right: 20px;
    float: right;
    margin-top: 100px;
    flex-direction: column;
`

const H1 = styled.h1`
    font-size: 40px;
    margin-bottom: -5px;
`

const H3 = styled.h3`
    font-size: 25px;
    font-weight: 400;
    color: #21966f;
    margin-bottom: 30px;
`

const Span = styled.span`
    inline-size: 400px;
    word-wrap: break-word;
    font-size: 17px;
    line-height: 30px;
    color: #999999;
    text-align: left;
`

const SocialDiv = styled.div`
    display: absolute;
    position: relative;
    flex-direction: column;
    margin-top: 200px;
    margin-left: 100px;
    bottom: 0;
`

const Social = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

const SocialHeader = styled.span`
    display: flex;
    color: #075046;
    font-size: 25px;
    text-align: center;
    margin-left: auto;
    margin-top: -50px;
    z-index: 0;

    &::before {
        content: '';
        z-index: -1;
        left: -1em;
        border-width: 2px;
        border-style: solid;
        border-color: #ef8c22;
        position: absolute;
        border-right-color: transparent;
        width: 150px;
        height: 2em;
        transform: rotate(2deg);
        opacity: 0.7;
        border-radius: 50%;
        padding: 0.1em 0.25em;
    }

    &::after {
        content: '';
        z-index: -1;
        left: -1em;
        padding: 0.1em 0.25em;
        border-width: 2px;
        border-style: solid;
        border-color: #ef8c22;
        border-left-color: transparent;
        border-top-color: transparent;
        position: absolute;
        width: 150px;
        height: 2em;
        transform: rotate(-1deg);
        opacity: 0.7;
        border-radius: 50%;
    }
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #066e5f;
    margin-right: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #098372;
    }
`

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    float: right;
    margin-top: -750px;
`

const Project = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    transition: all 0.2s ease-in-out;
    border-radius: 20px;
    padding: 10px;
    width: fit-content;

    &:hover {
        background-color: lightgray;
    }

    &:hover Img {
        border-color: #999999;
    }
`

const Img = styled.img`
    width: 250px;
    height: 150px;
    margin-right: 20px;
    border-radius: 10px;
    border: 2px solid #747474;
    transition: all 0.2s ease-in-out;
`

const H2 = styled.div`
    display: flex;
    flex-direction: row;
    inline-size: 700px;
    font-weight: 600;
    width: fit-content;
`

const P = styled.p`
    inline-size: 400px;
    margin-top: 10px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #999999;
`

const SectionTexts = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: fit-content;
`

const Svg = styled.svg``

const A = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.1s ease-in-out;
    width: fit-content;
    height: fit-content;

    &:hover {
        color: #027b6b;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: fit-content;
`

const Li = styled.li`
    margin-left: 15px;
    background-color: #025a4e;
    color: #ede7de;
    padding: 5px 10px;
    border-radius: 15px;
    width: fit-content;
`

export default function Work() {
    useEffect(() => {
        document.title = 'OzgurDevFolio • Work'
    }, [])

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    const navigateToAbout = () => {
        navigate('/about')
    }

    const navigateToContact = () => {
        navigate('/contact')
    }

    const navigateToWork = () => {
        navigate('/work')
    }

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <>
            <WorkDiv>
                <Navbar>
                    <ul style={{ display: 'flex', flexDirection: 'row' }}>
                        <li
                            onClick={navigateToHome}
                            style={{ marginRight: '40px', backgroundColor: '#edd1a7', margin: '10px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer', borderRadius: '20px' }}>
                            Home
                        </li>
                        <li onClick={navigateToAbout} style={{ marginRight: '40px', margin: '10px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}>
                            About
                        </li>
                        <li onClick={navigateToWork} style={{ marginRight: '40px', margin: '10px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}>
                            Work
                        </li>
                        <li onClick={navigateToContact} style={{ marginRight: '40px', margin: '10px', padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}>
                            Contact
                        </li>
                    </ul>
                </Navbar>
                <Left>
                    <H1>Özgür Demirbacak</H1>
                    <H3>Front-End Developer</H3>
                    <Span>
                        OzgurDevFolio seamlessly melds visionary UI/UX design with expert Front-End Development, creating an enchanting digital experience. Every project reflects a perfect harmony of
                        captivating aesthetics and user-centric functionality, while cutting-edge technology ensures flawless responsiveness and optimal performance. Welcome to a realm where
                        creativity converges with seamless digital interactions - welcome to OzgurDevFolio.
                    </Span>
                    <SocialDiv>
                        <SocialHeader>Elsewhere</SocialHeader>
                        <Social>
                            <SocialLink href="https://github.com/OzgurDevFolio">
                                <span style={{ cursor: 'pointer', display: 'block' }}>Github</span>
                            </SocialLink>
                            <SocialLink href={cvLink} download="Özgür Demirbacak CV" target="_blank" rel="noreferrer" onClick={handleClick}>
                                <span>CV</span>
                            </SocialLink>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    You have installed CV successfully!
                                </Alert>
                            </Snackbar>
                            <SocialLink href="https://www.linkedin.com/in/%C3%B6zg%C3%BCrDemirbacak/">
                                <span>LinkedIn</span>
                            </SocialLink>
                        </Social>
                    </SocialDiv>
                </Left>
                <Right>
                    <Projects>
                        <Project>
                            <Img src={Restaurant} alt="Restaurant" />
                            <SectionTexts>
                                <H2>
                                    <A href="https://myrestaurantappp.netlify.app/">
                                        <span style={{ marginRight: '10px', fontSize: '20px' }}>Regardless Best Restaurant Website Like Michelin Star</span>
                                        <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </Svg>
                                    </A>
                                </H2>
                                <P>
                                    Savor a virtual culinary adventure through our meticulously crafted restaurant website built with React. From delectable menus to easy table reservations, immerse
                                    yourself in a seamless browsing experience that captures the essence of fine dining while harnessing the capabilities of modern web technology.
                                </P>
                                <A href="https://github.com/OzgurDevFolio/Restaurant-App">
                                    <Svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }} height="1em" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </Svg>
                                    Give a star
                                </A>
                                <Ul>
                                    <Li>
                                        <div>React</div>
                                    </Li>
                                    <Li>
                                        <div>Mui</div>
                                    </Li>
                                    <Li>
                                        <div>Netlify</div>
                                    </Li>
                                    <Li>
                                        <div>styled-components</div>
                                    </Li>
                                </Ul>
                            </SectionTexts>
                        </Project>
                        <Project>
                            <Img src={Youtube} alt="Youtube" />
                            <SectionTexts>
                                <H2>
                                    <A href="http://youtubemyapp.netlify.app">
                                        <span style={{ marginRight: '10px', fontSize: '20px' }}>Youtube Clone Website</span>
                                        <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </Svg>
                                    </A>
                                </H2>
                                <P>
                                    Embark on a visual journey with our YouTube-inspired website clone, meticulously crafted using React. Dive into a world of videos, explore diverse content, and
                                    engage with a user-friendly interface that mirrors the iconic video-sharing platform while leveraging the versatility of contemporary web development.
                                </P>
                                <A href="https://github.com/OzgurDevFolio/Youtube-Clone">
                                    <Svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }} height="1em" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </Svg>
                                    Give a star
                                </A>
                                <Ul>
                                    <Li>
                                        <div>React</div>
                                    </Li>
                                    <Li>
                                        <div>Tailwind</div>
                                    </Li>
                                    <Li>
                                        <div>Netlify</div>
                                    </Li>
                                </Ul>
                            </SectionTexts>
                        </Project>
                        <Project>
                            <Img src={Spotify} alt="Spotify" />
                            <SectionTexts>
                                <H2>
                                    <A href="https://spotifymyapp.netlify.app/home">
                                        <span style={{ marginRight: '10px', fontSize: '20px' }}>Build a Spotify Website</span>
                                        <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </Svg>
                                    </A>
                                </H2>
                                <P>
                                    Immerse yourself in the world of music using our React-based Spotify website clone. With a familiar interface and dynamic features, enjoy the thrill of exploring
                                    music, curating playlists, and uncovering fresh artists, all while relishing the power of cutting-edge web technology.
                                </P>
                                <A href="https://github.com/OzgurDevFolio/Spotify-Clone">
                                    <Svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }} height="1em" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </Svg>
                                    Give a star
                                </A>
                                <Ul>
                                    <Li>
                                        <div>React</div>
                                    </Li>
                                    <Li>
                                        <div>Mui</div>
                                    </Li>
                                    <Li>
                                        <div>Netlify</div>
                                    </Li>
                                </Ul>
                            </SectionTexts>
                        </Project>
                        <Project>
                            <Img src={Gym} alt="Gym" />
                            <SectionTexts>
                                <H2>
                                    <A href="https://gymmyapp.netlify.app/">
                                        <span style={{ marginRight: '10px', fontSize: '20px' }}>FitHub: Your Ultimate Fitness Destination</span>
                                        <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </Svg>
                                    </A>
                                </H2>
                                <P>
                                    Welcome to FitHub, your premier online fitness destination powered by cutting-edge React technology. Dive into a virtual realm of workouts, access personalized
                                    training routines, and engage with a seamless interface that mirrors the gym experience, all while harnessing the latest advancements in web development for your
                                    fitness journey.
                                </P>
                                <A href="https://github.com/OzgurDevFolio/Gym-App">
                                    <Svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }} height="1em" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </Svg>
                                    Give a star
                                </A>
                                <Ul>
                                    <Li>
                                        <div>React</div>
                                    </Li>
                                    <Li>
                                        <div>Mui</div>
                                    </Li>
                                    <Li>
                                        <div>Netlify</div>
                                    </Li>
                                    <Li>Gym API</Li>
                                </Ul>
                            </SectionTexts>
                        </Project>
                        <Project>
                            <Img src={Linkedin} alt="Linkedin" />
                            <SectionTexts>
                                <H2>
                                    <A href="https://linkedinmyapp.netlify.app/">
                                        <span style={{ marginRight: '10px', fontSize: '20px' }}>ConnectPro: Your Professional Networking Platform</span>
                                        <Svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </Svg>
                                    </A>
                                </H2>
                                <P>
                                    Immerse yourself in the world of music using our React-based Spotify website clone. With a familiar interface and dynamic features, enjoy the thrill of exploring
                                    music, curating playlists, and uncovering fresh artists, all while relishing the power of cutting-edge web technology.
                                </P>
                                <A href="https://github.com/OzgurDevFolio/LinkedIn-App">
                                    <Svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }} height="1em" viewBox="0 0 576 512">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                    </Svg>
                                    Give a star
                                </A>
                                <Ul>
                                    <Li>
                                        <div>React</div>
                                    </Li>
                                    <Li>
                                        <div>Mui</div>
                                    </Li>
                                    <Li>
                                        <div>Netlify</div>
                                    </Li>
                                </Ul>
                            </SectionTexts>
                        </Project>
                    </Projects>
                </Right>
            </WorkDiv>
        </>
    )
}
