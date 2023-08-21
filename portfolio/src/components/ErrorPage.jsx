import { React, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { forwardRef } from 'react'
import cvLink from '../assets/cvLink.pdf'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'VT323', monospace;
`

const Table = styled.div`
    width: 790px;
    height: 150px;
    background-color: #d4e5ff;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    background: #050321;
    width: 770px;
    height: 130px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.3);
`

const Monitor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    margin: auto;
    width: 735px;
    height: 110px;
    background-color: #344151;
    overflow: hidden;
    white-space: nowrap;
    box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
`

const Move = keyframes`
    from {
        left: 800px;
    }
    to {
        left: -1000px;
    }
`

const P = styled.p`
    font-family: 'VT323', monospace;
    font-size: 100px;
    position: relative;
    display: inline-block;
    margin-top: -30px;
    color: #ebb55f;
    animation-name: ${Move};
    animation-duration: 5s;
    animation-iteration-count: infinite;
`

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const SocialDiv = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-left: 100px;
    bottom: 50px;
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
    margin-left: 0px;
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
        width: 170px;
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
        width: 170px;
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

const ContactLinks = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    right: 0;
    bottom: 50px;
    margin-right: 100px;
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

const H2 = styled.h2`
    display: flex;
    position: absolute;
    top: 200px;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'VT323', monospace;
    font-size: 20px;
`

const Button = styled.button`
    display: flex;
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 70%;
    right: 50%;
    transform: translateY(-50%, -50%);
    bottom: 0;
    left: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        background-color: #fff;
    }

    &:active {
        box-shadow: #422800 2px 2px 0 0;
        transform: translate(2px, 2px);
    }
`

export default function ErrorPage() {
    useEffect(() => {
        document.title = 'Page Not Found'
    }, [])

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

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <>
            <ErrorDiv>
                <Table>
                    <Wrapper>
                        <Monitor>
                            <P>Page Not Found!</P>
                        </Monitor>
                    </Wrapper>
                </Table>
                <H2>You've taken a wrong turn somewhere. Let's get you back on track.</H2>
                <Button onClick={navigateToHome}>Home</Button>
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
            </ErrorDiv>
        </>
    )
}
