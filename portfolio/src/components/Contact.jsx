import { React, useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from '@mui/material'
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

const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow-x: hidden !important;
    text-decoration: none;
    color: #025a4e;
    list-style: none;
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

const Collaborate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
`

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;

    @media only screen and (max-width: ${breakpoints.m}) {
        font-size: 20px;
    }
`

const Span = styled.span`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    width: fit-content; 
    height: fit-content;
    transition: all 0.3s ease-in-out;
    text-align: center;
    justify-content: center;
    align-items: center;

    
    &:hover:before {
        background-color: #6ec1e4;
        height: 20px;
        margin-top: -0.5px;
    }
    
    &::before {
        content: '';
        background-color: #6ec1e4;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        width: 440px;
        height: 13px;
        z-index: -1;
        transition: all .3s ease-in-out;
        text-align: center;
        justify-content: center;
        align-items: center;
        
        @media only screen and (max-width: ${breakpoints.m}) {
            font-size: 15px;

            &::before {
                width: 400px;
        }
`

const HireButton = Styled(Button)`
    background-color: #025a4e;
    color: #ede7de;
    margin-top: 30px;
    width: max-content;
    height: max-content;
    margin: 20px;
    margin-top: 50px;

    &:hover {
        background-color: #066e5f;
        color: #ede7de;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: fit-content;
    align-items: center;
    justify-content: space-between;
`

const SocialDiv = styled.div`
    display: absolute;
    position: relative;
    flex-direction: column;
    margin-top: 400px;
    margin-left: 30px;
    bottom: 0;
`

const Social = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    text-align: left;
    float: left;

    @media only screen and (max-width: ${breakpoints.m}) {
        flex-direction: column;
    }
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

    @media only screen and (max-width: ${breakpoints.m}) {
        font-size: 20px;

        &::before {
            width: 130px;
            left: -0.7em;
        }

        &::after {
            width: 130px;
            left: -1.3em;
        }
    }
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    float: left;
    color: #066e5f;
    margin-right: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: ${breakpoints.m}) {
        font-size: 14px;
    }

    &:hover {
        color: #098372;
    }
`

const ContactLinks = styled.div`
    display: flex;
    flex-direction: column;
    display: absolute;
    position: relative;
    flex-direction: column;
    margin-top: 365px;
    margin-right: 20px;
    bottom: 0;
`

const A = styled.a`
    display: flex;
    white-space: nowrap;
    width: fit-content;
    height: fit-content;
    color: #ede7de;
    background-color: #edd1a7;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: ${breakpoints.m}) {
        font-size: 15px;
        padding: 3px 6px;
    }

    &:hover {
        transform: scale(1.04);
    }
`

export default function Contact() {
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

    useEffect(() => {
        document.title = 'OzgurDevFolio • Contact'
    }, [])

    return (
        <>
            <ContactDiv>
                <Navbar>
                    <Ul>
                        <Li onClick={navigateToHome} style={{ borderRadius: '20px', backgroundColor: '#edd1a7' }}>
                            Home
                        </Li>
                        <Li onClick={navigateToAbout}>About</Li>
                        <Li onClick={navigateToWork}>Work</Li>
                        <Li onClick={navigateToContact}>Contact</Li>
                    </Ul>
                </Navbar>
                <Collaborate>
                    <H1>AVALIABLE FOR SELECT JOB OPPORTUNITIES</H1>
                    <Span>Have an exciting project you need help with? Contact with me!</Span>
                    <HireButton href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝20%Want20%to20%Hire.20%Let's20%talk">Hire me!</HireButton>
                </Collaborate>
                <Content>
                    <SocialDiv>
                        <SocialHeader>Elsewhere</SocialHeader>
                        <Social>
                            <SocialLink target="_blank" href="https://github.com/OzgurDevFolio">
                                <span style={{ cursor: 'pointer', display: 'block' }}>Github</span>
                            </SocialLink>
                            <SocialLink target="_blank" href={cvLink} download="Özgür Demirbacak CV" rel="noreferrer" onClick={handleClick}>
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
                    </SocialDiv>
                    <ContactLinks>
                        <H1>Let's Contact</H1>
                        <A className="animationLink" href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk">
                            <span style={{ display: 'inline-block' }}>CONTACT ME</span>
                        </A>
                    </ContactLinks>
                </Content>
            </ContactDiv>
        </>
    )
}
