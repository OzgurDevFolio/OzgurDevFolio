import { React, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import cvImg from '../assets/portfolioImg.jpg'
import SpotifyIcon from '../assets/spotify-icon.png'
import Ny from '../assets/ny-image.jpg'
import Istanbul from '../assets/istanbul-image.jpg'
import MonitorIcon from '@mui/icons-material/Monitor'
import CodeIcon from '@mui/icons-material/Code'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import './Sticky.css'

const breakpoints = {
    s: '380px',
    m: '620px',
    tablet: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440',
}

const Grow = keyframes`
0% {
    transform: scale(0.2);
}
100% {
    transform: scale(1);
}
`

const AboutDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    padding: 20px;
    overflow-x: hidden !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    list-style: none;
    color: #025a4e;
    animation-name: ${Grow};
    animation-duration: 1s;
    animation-iteration-count: 1;
`

const Navbar = styled.div`
    display: block;
    flex-direction: row;
    background: transparent;
    height: fit-content;
    width: fit-content;
    border-radius: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    position: fixed;
    top: 0;
    background-color: #f4f3f0;
    opacity: 0.99;
    z-index: 10002;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
`

const Li = styled.li`
    margin-right: 40px;
    margin: 10px;
    padding: 10px 30px;
    font-size: 18px;
    cursor: pointer;

    @media only screen and (max-width: ${breakpoints.m}) {
        padding: 6px 15px;
        font-size: 15px;
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        font-size: 12px;
        padding: 2px 5px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
`

const DevFolio = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: fit-content;
    position: relative;
    cursor: pointer;
    margin-left: 50px;
    margin-right: 50px;
`

const ImgSection = styled.a`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    width: fit-content;
    height: fit-content;
`

const Img = styled.img`
    width: 300px;
    height: 400px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
`

const Section = styled.section`
    display: flex;
    flex-direction: row;
    width: 300px;
    color: #ede7de;
    background-color: #025a4e;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: ${breakpoints.lg}) {
        flex-direction: column;
    }
`

const Expertise = styled.div`
    display: flex;
    flex-direction: column;
`

const ExpertiseDivs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 3px solid #a3a3a3;

    @media only screen and (max-width: ${breakpoints.lg}) {
        display: grid;
        grid-template-column: auto auto auto;
        margin: 10px;
    }
`

const ExpertiseDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-right: 1.5px solid #a3a3a3;
    margin-top: 10px;

    @media only screen and (max-width: ${breakpoints.lg}) {
        border-bottom: 2px solid #a3a3a3;
        width: 100vw;
    }
`

const Span1 = styled.span`
    display: flex;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    height: fit-content;
    white-space: nowrap;

    &::before {
        content: '';
        background-color: #46b96c;
        position: absolute;
        width: 220px;
        height: 14px;
        left: -2px;
        bottom: 0;
        z-index: -1;
        transform: rotate(-2deg);
    }
`

const Span2 = styled.span`
    display: flex;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    height: fit-content;
    white-space: nowrap;

    &::before {
        content: '';
        background-color: #9896f0;
        position: absolute;
        width: 260px;
        height: 14px;
        left: -2px;
        bottom: 0;
        z-index: -1;
        transform: rotate(-2deg);
    }
`

const Span3 = styled.span`
    display: flex;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    height: fit-content;
    white-space: nowrap;

    &::before {
        content: '';
        background-color: #ffcb70;
        position: absolute;
        width: 280px;
        height: 14px;
        left: -2px;
        bottom: 0;
        z-index: -1;
        transform: rotate(-2deg);
    }
`

const Features = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    text-align: left;
    width: 100vw;
    margin: 50px;
    padding: 20px;
    background-color: #025a4e;
    color: #ede7de;
    border-radius: 20px;

    @media only screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: auto;
    }
`

const Feature = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
`

const FeatureSpan = styled.span`
    color: #ede7de;
    font-size: 18px;
    line-height: 30px;
`

const H1 = styled.h1`
    color: #8fdcc2;
    font-size: 25px;
    font-weight: 600;
`

const H3 = styled.h3`
    color: #56c288;
    font-weight: 600;
    font-size: 23px;
`

const PElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PElement = styled.p`
    display: flex;
    text-align: left;
    inline-size: 500px;
    line-height: 30px;
    font-weight: 600;
    font-size: 20px;
    margin: 20px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        inline-size: 300px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        inline-size: 200px;
        font-size: 18px;
    }
`

const PElement1 = styled.p`
    display: flex;
    position: relative;
    justify-content: center;
    word-wrap: break-word;
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    margin: 20px;

    &::before {
        content: '';
        background-color: #ffcb70;
        position: absolute;
        left: '50%';
        transform: 'translate(-50%, -50%)';
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 390px;
        height: 14px;
        bottom: 0;
        z-index: -1;
        transform: rotate(-2deg);
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        inline-size: 500px;
        font-size: 15px;

        &::before {
            width: 350px;
            transform: rotate(0deg);
            margin-bottom: 7px;
        }
    }
`

const Photos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
    }
`

const ImgDiv = styled.div`
    display: block;
    width: 60%;
    height: 500px;
    margin-right: 30px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out !important;
    margin-top: 20px;

    @media only screen and (max-width: ${breakpoints.md}) {
        width: 80%;
        margin-right: 0px;
        width: 100vw;
        height: 300px;
    }
`

const ImgDiv1 = styled.div`
    display: block;
    width: 35%;
    height: 500px;
    margin-left: 30px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out !important;

    @media only screen and (max-width: ${breakpoints.md}) {
        width: 80%;
        margin-left: 0px;
        width: 100vw;
        height: 300px;
        border-radius: 0px;
    }
`

const Img1 = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out !important;

    @media only screen and (max-width: ${breakpoints.md}) {
        border-radius: 0px;
    }
`

const Img2 = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out !important;
    margin-top: 30px;

    @media only screen and (max-width: ${breakpoints.md}) {
        border-radius: 0px;
    }
`

const Overlay = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-left: 10px;
    margin-top: -50px;
    z-index: 1;
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    background-color: #ede7de;
    font-size: 18px;
    color: #025a4e;
    border-radius: 10px;
    transition: all 0.3s ease-in-out !important;
    user-select: none;
    cursor: pointer;
`

const ImgText = styled.h2`
    color: #025a4e;
    font-size: 18px;
    transition: all 0.3s ease-in-out !important;
`

const P = styled.span`
    display: flex;
    position: relative;
    font-size: 22px;
    float: left;
    height: fit-content;
    transition: all 0.3s ease-in-out;
    inline-size: 700px;
    text-align: left;
    word-break: break-word;
    word-wrap: normal;
    overflow-wrap: break-word;
    white-space: normal;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        inline-size: 400px;
        font-size: 18px;
        text-align: center;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        inline-size: 200px;
        font-size: 15px;
        text-align: center;
    }
`

const SpecialH3 = styled.h3`
    font-size: 30px;
    inline-size: 700px;
    font-weight: 600;
    margin-top: 50px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        inline-size: 500px;
        font-size: 25px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        inline-size: 300px;
        font-size: 20px;
    }
`

const ImgTexts = styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    margin-left: 10px;
`

const ExpertiseText = styled.div`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    word-wrap: break-word;
    white-space: normal;
`

const SpecialText = styled.h3`
    display: flex;
    flex-direction: row;
    width: 100vw;
    color: #21966f;
    font-size: 50px;
    line-height: 120%;
    inline-size: 1100px;
    letter-spacing: -1px;
    text-align: center;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    margin-top: 50px;

    @media only screen and (max-width: ${breakpoints.lg}) {
        inline-size: 750px;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        inline-size: 500px;
        font-size: 30px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        inline-size: 300px;
        font-size: 25px;
    }
`

const SpecialText1 = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    line-height: 120%;
    inline-size: 600px;
    letter-spacing: -1px;
    text-align: center;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    margin-top: 80px;
    margin: 20px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        inline-size: 400px;
        font-size: 17px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        inline-size: 200px;
        font-size: 15px;
    }
`

const Span = styled.span`
    font-size: 70px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px;
`

export default function About() {
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

    useEffect(() => {
        document.title = 'OzgurDevFolio • About'
    }, [])

    const [show, setShow] = useState(false)

    const showOverlay = () => {
        setShow(true)
    }

    const hideOverlay = () => {
        setShow(false)
    }

    const [show1, setShow1] = useState(false)

    const showOverlay1 = () => {
        setShow1(true)
    }

    const hideOverlay1 = () => {
        setShow1(false)
    }

    return (
        <>
            <AboutDiv>
                <Navbar id="navbar">
                    <Ul style={{ display: 'flex', flexDirection: 'row' }}>
                        <Li onClick={navigateToHome} style={{ backgroundColor: '#edd1a7', borderRadius: '15px' }}>
                            Home
                        </Li>
                        <Li onClick={navigateToAbout}>About</Li>
                        <Li onClick={navigateToWork}>Work</Li>
                        <Li onClick={navigateToContact}>Contact</Li>
                    </Ul>
                </Navbar>
                <Content>
                    <Span>I'm Özgür.</Span>
                    <ContentDiv>
                        <DevFolio>
                            <ImgSection href="https://open.spotify.com/search/diva%20yorgun" target="_blank">
                                <Img src={cvImg} alt="Image of Me" />
                                <Section>
                                    <img src={SpotifyIcon} alt="Spotify Icon" style={{ width: '35px', height: '35px', margin: '5px', marginLeft: '30px' }} />
                                    <ImgTexts>
                                        <span>On Repeat</span>
                                        <span style={{ marginLeft: '10px' }}>Diva Yorgun</span>
                                    </ImgTexts>
                                </Section>
                            </ImgSection>
                        </DevFolio>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <SpecialH3>I'm a Front-End Developer working remotely from Istanbul, Turkey.</SpecialH3>
                            <br />
                            <br />
                            <P>
                                Over the span of more than a decade, my journey has taken me through diverse realms of digital creation, encompassing front-end development, email design, marketing
                                aesthetics, and the intricacies of app UI/UX. I take great pride in the multitude of roles I've embraced along the way.
                            </P>
                            <br />
                        </div>
                    </ContentDiv>
                    <Expertise>
                        <h1 style={{ fontSize: '40px', marginBottom: '30px' }}>My Expertise</h1>
                        <ExpertiseDivs>
                            <ExpertiseDiv>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <MonitorIcon sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginRight: '5px', width: '40px', height: '30px' }} />
                                    <Span1>Software Development</Span1>
                                </div>
                                <ExpertiseText>
                                    <span>Experienced in both functional and OOP: JavaScript, TypeScript.</span>
                                </ExpertiseText>
                            </ExpertiseDiv>
                            <ExpertiseDiv>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CodeIcon sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginRight: '5px', width: '40px', height: '30px' }} />
                                    <Span2>Frontend Dev React, NextJS</Span2>
                                </div>
                                <ExpertiseText>
                                    <span>Possessing a fervent enthusiasm for UI/UX, adeptly skilled in the realm of development utilizing HTML, CSS, JS, React, and NextJS frameworks.</span>
                                </ExpertiseText>
                            </ExpertiseDiv>
                            <ExpertiseDiv>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <PhoneIphoneIcon sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginRight: '5px', width: '40px', height: '30px' }} />
                                    <Span3>React Native Dev Android, IOS</Span3>
                                </div>
                                <ExpertiseText>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</ExpertiseText>
                            </ExpertiseDiv>
                        </ExpertiseDivs>
                    </Expertise>
                    <SpecialText>Let's collaborate if you're committed to sustainability, education, equality, or carbon neutrality.</SpecialText>
                    <SpecialText1>
                        I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel
                        the same, I'd love to talk.
                    </SpecialText1>
                    <Features>
                        <Feature>
                            <H1>01</H1>
                            <H3>Make it</H3>
                            <FeatureSpan>
                                In the world of design, the magic happens when sketches and prototypes evolve into interactive links. These links serve as focal points, uniting teams, fostering
                                collaboration, and turning visions into tangible user experiences. Beyond being mere prototypes, they embody the collective effort, driving momentum and crafting
                                exceptional designs.
                            </FeatureSpan>
                        </Feature>
                        <Feature>
                            <H1>02</H1>
                            <H3>Collaborate</H3>
                            <FeatureSpan>
                                Design thrives on collaboration, not isolation. Creating a shared space for teamwork, feedback, and diverse perspectives nurtures a design process that evolves
                                seamlessly, yielding impactful outcomes.
                            </FeatureSpan>
                        </Feature>
                        <Feature>
                            <H1>03</H1>
                            <H3>Accessible FTW</H3>
                            <FeatureSpan>
                                I prioritize universal accessibility in my designs based on ethical principles. By making products accessible, I promote equality and inclusivity, contributing to a
                                compassionate design landscape that empowers a diverse range of individuals.
                            </FeatureSpan>
                        </Feature>
                        <Feature>
                            <H1>04</H1>
                            <H3>Keep Experimenting</H3>
                            <FeatureSpan>
                                I approach my creative process with a mindset of constant evolution and experimentation. Embracing both successes and failures, I value trying new approaches to refine
                                my creative output and deepen my understanding.
                            </FeatureSpan>
                        </Feature>
                    </Features>
                    <PElements>
                        <PElement>
                            In the realm where pixels dance and code weaves, I orchestrate digital symphonies that captivate the eye and delight the senses. With a passion for crafting seamless user
                            experiences and a flair for turning lines of code into stunning visual tapestries, I breathe life into the virtual realms we navigate.
                        </PElement>
                        <br />
                        <PElement>
                            Every pixel, every line of code, every color choice, and every interaction is a brushstroke in the canvas of the digital world. As a front-end developer and UI/UX designer,
                            I am dedicated to transcending the ordinary, pushing boundaries, and shaping tomorrow's digital landscape.
                        </PElement>
                        <br />
                        <PElement>
                            Join me in the journey of innovation, where design and development entwine, giving birth to creations that inspire and elevate. The canvas is boundless, and I am driven to
                            explore its every corner, creating harmonious symphonies of form and function.
                        </PElement>
                    </PElements>
                    <br />
                    <br />
                    <PElement1>Let's shape the future, one pixel at a time.</PElement1>
                    <Photos>
                        <ImgDiv>
                            <Img1 src={Istanbul} onMouseOver={showOverlay} onMouseLeave={hideOverlay} alt="Istanbul, TURKEY" />
                            {show && (
                                <Overlay>
                                    <ImgText>Istanbul, Turkey</ImgText>
                                </Overlay>
                            )}
                        </ImgDiv>
                        <ImgDiv1>
                            <Img2 src={Ny} onMouseOver={showOverlay1} onMouseLeave={hideOverlay1} alt="New York, US" />
                            {show1 && (
                                <Overlay loading="lazy">
                                    <ImgText>New York, US</ImgText>
                                </Overlay>
                            )}
                        </ImgDiv1>
                    </Photos>
                </Content>
            </AboutDiv>
        </>
    )
}
