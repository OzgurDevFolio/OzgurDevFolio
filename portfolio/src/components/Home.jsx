import { React, useState } from 'react'
import styled from 'styled-components'
import Moon from '../assets/moon.png'
import Sun from '../assets/sunicon.png'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import { forwardRef } from 'react'
import cvLink from '../assets/cvLink.pdf'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    overflow-x: hidden !important;
    background: hsla(248, 65%, 51%, 1);
    background: linear-gradient(60deg, hsla(248, 65%, 51%, 1) 43%, hsla(81, 83%, 73%, 1) 43%);
    background: -moz-linear-gradient(60deg, hsla(248, 65%, 51%, 1) 43%, hsla(81, 83%, 73%, 1) 43%);
    background: -webkit-linear-gradient(60deg, hsla(248, 65%, 51%, 1) 43%, hsla(81, 83%, 73%, 1) 43%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831D4", endColorstr="#CCF381", GradientType=1 );
`

const Navbar = styled.div`
    display: flex;
    flex-direction: row !important;
    width: 100vw;
    height: fit-content;
    align-items: center;
    user-select: none;
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

const Section = styled.div`
    display: flex;
    color: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: hsla(248, 65%, 51%, 1);
    background: linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    background: -moz-linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    background: -webkit-linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831D4", endColorstr="#CCF381", GradientType=1 );
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.08);
    }
`

const HireButton = styled.a`
    display: flex;
    color: #4831d4;
    margin-right: 50px;
    font-size: 50px;
    width: 250px;
    height: 250px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: hsla(248, 65%, 51%, 1);
    background: linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    background: -moz-linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    background: -webkit-linear-gradient(240deg, hsla(248, 65%, 51%, 1) 15%, hsla(81, 83%, 73%, 1) 15%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4831D4", endColorstr="#CCF381", GradientType=1 );
    transition: all 0.3s ease-in-out;

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

export default function Home() {
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
            <HomeDiv>
                <Navbar>
                    <Logo onClick={navigateToHome}>
                        <span type="button" style={{ textDecoration: 'none', color: '#4831d4', flexDirection: 'row' }}>
                            Özgür
                        </span>
                        <span style={{ marginLeft: '10px', color: '#FFA500' }}>/ &gt;</span>
                    </Logo>
                    <ThemeButton>
                        <Input type="checkbox" id="darkmode-toggle" />
                        <Label htmlFor="darkmode-toggle">
                            <Img src={Sun} alt="Sun Icon" />
                            <Img src={Moon} alt="Moon Icon" />
                        </Label>
                    </ThemeButton>
                </Navbar>
                <Main>
                    <Container sx={{ width: '100%', height: '90%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        <Section onClick={navigateToAbout}>About</Section>
                        <Section
                            onClick={navigateToWork}
                            style={{
                                background: 'hsla(81, 83%, 73%, 1)',
                                background: 'linear-gradient(60.5deg, hsla(81, 83%, 73%, 1) 41%, hsla(248, 65%, 51%, 1) 41%)',
                                background: ' -moz-linear-gradient(60.5deg, hsla(81, 83%, 73%, 1) 41%, hsla(248, 65%, 51%, 1) 41%)',
                                background: '-webkit-linear-gradient(60.5deg, hsla(81, 83%, 73%, 1) 41%, hsla(248, 65%, 51%, 1) 41%)',
                                color: '#ccf381',
                            }}>
                            Work
                        </Section>
                        <HireButton href="mailto:ozgurdemirbacak1@gmail.com?subject=🤝20%Want20%to20%Hire.20%Let's20%talk" style={{ background: '#4831D4', color: '#ccf381' }}>
                            Hire Me
                        </HireButton>
                        <Section onClick={navigateToContact} style={{ background: '#4831D4', color: '#ccf381' }}>
                            Contact
                        </Section>
                    </Container>
                    <Container>
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
                        <Container style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '-680px', color: '#FFA500', transform: 'rotate(90deg)', marginTop: '-570px' }}>
                            © 2023 OzgurDevFolio - All Right Reserved
                        </Container>
                    </Container>
                </Main>
            </HomeDiv>
        </>
    )
}

// *!   I have to make dark and light buttons functional

// const Div = styled.div`
//     .home {
//         width: 100vw;
//         height: 100vh;
//         background-color: #000;
//         display: flex;
//         flex-direction: column;
//         transition: background-color 0.3s ease;
//     }

// .dark {
//     background-image:linear-gradient(to bottom, #010314, #081435, #061e59, #12267e, #2c2ca2, #4033b1, #5339c0, #6640cf, #6f4dcd, #7759cb, #7f65c9, #8770c6);
//     color: white;
// }
// .light {
//     background-image: linear-gradient(to bottom, #010314, #081435, #061e59, #12267e, #2c2ca2, #4033b1, #5339c0, #6640cf, #6f4dcd, #7759cb, #7f65c9, #8770c6) background-image: linear-gradient(to bottom, #5ffbf1, #6ffcf4, #7dfdf6, #8bfdf8, #97fefa, #a1fefb, #aafffb, #b3fffc, #bdfffc, #c6fffc, #cefffc, #d7fffc);
// }
// `

// *!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
