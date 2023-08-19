import { React, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import { forwardRef } from 'react'
import cvLink from '../assets/cvLink.pdf'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100%;
    padding: 20px;
    overflow-x: hidden !important;
    text-decoration: none;
    color: #025a4e;
    list-style: none;
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
`

const Span = styled.span`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: all 0.1s ease-in-out;

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

    &::hover::before {
        height: 20px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const HireButton = styled(Button)`
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

const SocialDiv = styled.div`
    display: absolute;
    position: relative;
    flex-direction: column;
    margin-top: 400px;
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
    flex-direction: row;
    white-space: nowrap;
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
                <Collaborate>
                    <H1>AVALIABLE FOR SELECT JOB OPPORTUNITIES</H1>
                    <Span>Have an exciting project you need help with? Contact with me!</Span>
                    <HireButton href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝20%Want20%to20%Hire.20%Let's20%talk">Hire me!</HireButton>
                </Collaborate>
                <Content>
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
                    <ContactLinks>
                        <H1 style={{ fontSize: '30px' }}>Let's Contact</H1>
                        <A className="animationLink" href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk">
                            <span style={{ display: 'inline-block' }}>CONTACT ME</span>
                        </A>
                    </ContactLinks>
                </Content>
            </ContactDiv>
        </>
    )
}
