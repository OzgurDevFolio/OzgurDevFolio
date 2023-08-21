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
`

const Navbar = styled.div`
    display: block;
    flex-direction: row;
    background: transparent;
    height: fit-content;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
`

const DevFolio = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: fit-content;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
`

const ImgSection = styled.div`
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    width: 300px;
    height: 400px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    float: left;
    left: auto;
    margin-right: 200px;
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
`

const ExpertiseDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-right: 1.5px solid #a3a3a3;
`

const Span1 = styled.span`
    display: flex;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    height: fit-content;

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
    margin: 50px;
    padding: 20px;
    background-color: #025a4e;
    color: #ede7de;
    border-radius: 20px;
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
`

const Photos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 35px;
`

const ImgDiv = styled.div`
    display: block;
    width: 60%;
    height: 500px;
    margin-right: 30px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
`

const ImgDiv1 = styled.div`
    display: block;
    width: 35%;
    height: 500px;
    margin-left: 30px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
`

const Img1 = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 100%;
`

const Img2 = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 100%;
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
    transition: all 0.3s ease;
    user-select: none;
    cursor: pointer;
`

const ImgText = styled.h2`
    color: #025a4e;
    font-size: 18px;
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
                <Content>
                    <span style={{ fontSize: '100px', fontWeight: '600', fontFamily: 'Roboto', marginTop: '0px' }}>I'm Özgür.</span>
                    <ContentDiv>
                        <DevFolio>
                            <ImgSection>
                                <Img src={cvImg} alt="Image of Me" />
                                <Section>
                                    <img src={SpotifyIcon} alt="Spotify Icon" style={{ width: '35px', height: '35px', margin: '5px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', float: 'left', marginLeft: '10px' }}>
                                        <span>On Repeat</span>
                                        <span style={{ marginLeft: '10px' }}>Diva Yorgun</span>
                                    </div>
                                </Section>
                            </ImgSection>
                        </DevFolio>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '30px', inlineSize: '700px', fontWeight: '600' }}>I'm a Front-End Developer working remotely from Istanbul, Turkey.</h3>
                            <br />
                            <br />
                            <p style={{ fontSize: '22px', float: 'left', textAlign: 'left' }}>
                                Over the span of more than a decade, my journey has taken me through diverse realms of digital creation, encompassing front-end development, email design, marketing
                                aesthetics, and the intricacies of app UI/UX. I take great pride in the multitude of roles I've embraced along the way.
                            </p>
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
                                <div style={{ marginTop: '5px', fontSize: '16px', fontWeight: '500' }}>
                                    <span>Experienced in both functional and OOP: JavaScript, TypeScript.</span>
                                </div>
                            </ExpertiseDiv>
                            <ExpertiseDiv>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CodeIcon sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginRight: '5px', width: '40px', height: '30px' }} />
                                    <Span2>Frontend Dev React, NextJS</Span2>
                                </div>
                                <div style={{ marginTop: '5px', fontSize: '16px', fontWeight: '500' }}>
                                    <span>Possessing a fervent enthusiasm for UI/UX, adeptly skilled in the realm of development utilizing HTML, CSS, JS, React, and NextJS frameworks.</span>
                                </div>
                            </ExpertiseDiv>
                            <ExpertiseDiv>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <PhoneIphoneIcon sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginRight: '5px', width: '40px', height: '30px' }} />
                                    <Span3>React Native Dev Android, IOS</Span3>
                                </div>
                                <div style={{ marginTop: '5px', fontSize: '16px', fontWeight: '500' }}>
                                    Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
                                </div>
                            </ExpertiseDiv>
                        </ExpertiseDivs>
                    </Expertise>
                    <h3
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            color: '#21966f',
                            fontSize: '50px',
                            lineHeight: '120%',
                            inlineSize: '1100px',
                            letterSpacing: '-1px',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            wordWrap: 'break-word',
                            marginLeft: '150px',
                            marginTop: '50px',
                        }}>
                        Let's collaborate if you're committed to sustainability, education, equality, or carbon neutrality.
                    </h3>
                    <p
                        style={{
                            textAlign: 'left',
                            inlineSize: '600px',
                            fontSize: '20px',
                            margin: '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            lineHeight: '120%',
                            inlineSize: '1100px',
                            letterSpacing: '-1px',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            wordWrap: 'break-word',
                            marginLeft: '150px',
                            marginTop: '50px',
                        }}>
                        I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel
                        the same, I'd love to talk.
                    </p>
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
