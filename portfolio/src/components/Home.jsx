import { React, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Moon from '../assets/moon.png'
import Sun from '../assets/sunicon.png'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import { forwardRef } from 'react'
import cvLink from '../assets/myCv.pdf'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

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

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    word-wrap: normal;
    overflow-x: hidden !important;
    background: hsla(248, 65%, 51%, 1);
    background: linear-gradient(90deg, hsla(248, 65%, 51%, 1) 25%, hsla(81, 83%, 73%, 1) 25%);    
    background: -moz-linear-gradient(90deg, hsla(248, 65%, 51%, 1) 25%, hsla(81, 83%, 73%, 1) 25%);    
    background: -webkit-linear-gradient(90deg, hsla(248, 65%, 51%, 1) 25%, hsla(81, 83%, 73%, 1) 25%);    
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831d4", endColorstr="#ccf381", GradientType=1 );GradientType=1 );
    animation-name: ${Grow};
    animation-duration: 1s;
    animation-iteration-count: 1;
`

const Navbar = styled.div`
    display: flex;
    flex-direction: row !important;
    width: 100vw;
    height: fit-content;
    align-items: center;
    user-select: none;
    justify-content: space-between;
`

const Logo = styled.a`
    margin-right: 20px;
    font-size: 30px !important;
    cursor: pointer;
`

const ThemeButton = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 40px;
`

const Input = styled.input`
    display: flex;
    width: 0;
    height: 0;
    visibility: hidden;
    user-select: none;

    &:checked + Label {
        background: #0b124a;
    }

    &:checked + Label:after {
        left: 95px;
        transform: translateX(-100%);
        background: #000c80;
    }
`

const Label = styled.label`
    width: 100px;
    height: 40px;
    position: relative;
    display: flex;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-in-out;

    &:after {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
    }

    &:active:after {
        width: 50px;
    }
`

const Img = styled.img`
    position: absolute;
    width: 25px;
    top: 8px;
    z-index: 100;

    &:nth-child(1) {
        left: 7px;
        color: lightgray;
        fill: lightgray;
        transition: all 0.3s ease-in-out;
    }

    &:nth-child(2) {
        left: 68px;
        color: lightgray;
        fill: lightgray;
        transition: all 0.3s ease-in-out;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const SectionDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;

    @media only screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: auto auto auto;
        gap: 10px;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        grid-template-columns: auto auto;
        gap: 10px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        grid-template-columns: auto auto;
        gap: 10px;
        margin-left: 14px;
    }
`

const AboutButton = styled.a`
    display: flex;
    color: #ccf381;
    background: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: ${breakpoints.lg}) {
        width: 200px;
        height: 200px;
        font-size: 40px;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        width: 150px;
        height: 150px;
        font-size: 20px;
        margin-right: 20px;
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        width: 140px;
        height: 140px;
        font-size: 20px;
        margin-right: 15px;
    }

    &:hover {
        transform: scale(1.08);
    }
`

const WorkButton = styled.a`
    display: flex;
    color: #ccf381;
    background: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: ${breakpoints.lg}) {
        width: 200px;
        height: 200px;
        font-size: 40px;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        background: #4831d4;
        color: #ccf381;
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        width: 150px;
        height: 150px;
        font-size: 20px;
        margin-right: 20px;
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        width: 140px;
        height: 140px;
        font-size: 20px;
        margin-right: 15px;
    }

    &:hover {
        transform: scale(1.08);
    }
`

const ContactButton = styled.a`
    display: flex;
    color: #ccf381;
    background: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: ${breakpoints.lg}) {
        width: 200px;
        height: 200px;
        font-size: 40px;
    }

    @media only screen and (max-width: ${breakpoints.md}) {
        background: hsla(248, 65%, 51%, 1);
        background: linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        background: -moz-linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        background: -webkit-linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831d4", endColorstr="#ccf381", GradientType=1 );
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        width: 150px;
        height: 150px;
        font-size: 20px;
        background: #4831d4;
        margin-right: 20px;
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        width: 140px;
        height: 140px;
        font-size: 20px;
        margin-right: 15px;
    }

    &:hover {
        transform: scale(1.08);
    }
`

const HireButton = styled.a`
    display: flex;
    color: #ccf381;
    background: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    word-wrap: normal;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: ${breakpoints.lg}) {
        width: 200px;
        height: 200px;
        font-size: 40px;
    }

    @media only screen and (max-width: ${breakpoints.tablet}) {
        background: hsla(248, 65%, 51%, 1);
        background: linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        background: -moz-linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        background: -webkit-linear-gradient(270deg, hsla(248, 65%, 51%, 1) 93%, hsla(81, 83%, 73%, 1) 93%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831d4", endColorstr="#ccf381", GradientType=1 );
    }

    @media only screen and (max-width: ${breakpoints.m}) {
        width: 150px;
        height: 150px;
        font-size: 20px;
        background: #4831d4;
        margin-right: 20px;
    }

    @media only screen and (max-width: ${breakpoints.s}) {
        width: 140px;
        height: 140px;
        font-size: 20px;
        margin-right: 15px;
    }

    &:hover {
        transform: scale(1.08);
    }
`

const Social = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: -50px;
    margin-left: auto;
`

const SocialHeader = styled.span`
    display: flex;
    color: #8fdcc2;
    font-size: 25px;
    margin-left: auto;
    margin-top: -50px;
    z-index: 0;
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #d4ede4;
    margin-right: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ededed;
    }
`

const Span = styled.span`
    color: #ffa500;
    margin-bottom: -50px;
`

export default function Home() {
    const currentYear = new Date().getFullYear()
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

    const [open1, setOpen1] = useState(false)

    const handleClick1 = () => {
        setOpen1(true)
    }

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen1(false)
    }

    useEffect(() => {
        document.title = 'OzgurDevFolio • Front-End Developer'
    }, [])

    return (
        <>
            <HomeDiv>
                <Navbar>
                    <Logo onClick={navigateToHome}>
                        <span type="button" style={{ textDecoration: 'none', color: '#4831d4', flexDirection: 'row' }}>
                            Özgür
                        </span>
                        <span style={{ marginLeft: '10px', color: '#FFA500' }}>/ &gt;</span>
                    </Logo>
                    <ThemeButton onClick={handleClick1}>
                        <Input type="checkbox" id="darkmode-toggle" />
                        <Label htmlFor="darkmode-toggle">
                            <Img src={Sun} alt="Sun Icon" />
                            <Img src={Moon} alt="Moon Icon" />
                        </Label>
                    </ThemeButton>
                    <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
                        <Alert onClose={handleClose1} severity="warning" sx={{ width: '100%' }}>
                            This is fake dark mode 😄
                        </Alert>
                    </Snackbar>
                </Navbar>
                <Main>
                    <Container sx={{ width: '100%', height: '90%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        <SectionDiv>
                            <AboutButton onClick={navigateToAbout}>About</AboutButton>
                            <WorkButton onClick={navigateToWork}>Work</WorkButton>
                            <HireButton href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝20%Want20%to20%Hire.20%Let's20%talk">Hire Me</HireButton>
                            <ContactButton onClick={navigateToContact}>Contact</ContactButton>
                        </SectionDiv>
                    </Container>
                    <Container>
                        <SocialHeader>Elsewhere</SocialHeader>
                        <Social>
                            <SocialLink target="_blank" href="https://github.com/OzgurDevFolio">
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
                            <SocialLink target="_blank" href="https://www.linkedin.com/in/%C3%B6zg%C3%BCrDemirbacak/">
                                <span>LinkedIn</span>
                            </SocialLink>
                        </Social>
                        <Span>© {currentYear} OzgurDevFolio - All Right Reserved</Span>
                    </Container>
                </Main>
            </HomeDiv>
        </>
    )
}
