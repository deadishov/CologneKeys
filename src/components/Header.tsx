import React from 'react'
import mainLogo from '../assets/images/logo.svg'
import menuItems from '../data/menuItems.json'
import phoneImg from '../assets/images/phone.svg'

export const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const overlayRef = React.useRef<HTMLDivElement>(null)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    React.useEffect(() => {
        const menuOutsideClick = (event: MouseEvent) => {
            if (overlayRef.current && event.composedPath().includes(overlayRef.current)) {
                setMenuOpen(false)
            }
        }


        document.body.addEventListener('click', menuOutsideClick)
        return () => document.body.removeEventListener('click', menuOutsideClick)
    }, [])

    return (
        <header className="header">
            <div className={menuOpen ? "burger__menu open" : "burger__menu"}>
                <div onClick={handleMenu} className="close-button">
                    <span className="stick"></span>
                    <span className="stick"></span>
                </div>
                <ul className="burger__menu-list">
                    {
                        menuItems.map((item) => (
                            <li className="burger__menu-item">
                                <a href="#" className="burger__menu-link">{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="container">
                <div className="header__menu">
                    <div onClick={handleMenu} className="header__menu-burger">
                        <span className="string"></span>
                        <span className="string"></span>
                        <span className="string"></span>
                    </div>
                    <a className='header__menu-logo' href="#">
                        <img src={mainLogo} alt="logo" />
                    </a>
                    <ul className="header__menu-list">
                        {
                            menuItems.map((item) => (
                                <li className="header__menu-item menu-item">
                                    <a href="#" className="header__menu-link menu-link">{item}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <a className="header__menu-phone phone-link">
                        <img className="phone-img" src={phoneImg} alt="phone" />
                        <p className="header__menu-phone-content">01579 2395837</p>
                    </a>
                </div>
            </div>
            {
                menuOpen && <div ref={overlayRef} className="overlay"></div>
            }
        </header>
    )
}
