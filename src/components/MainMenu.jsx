import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.jpg';
import { 
    AiFillHome as HomeIcon,
    AiOutlineUsergroupAdd as UserGroupIcon,
    AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";

export function MainMenu() {
    const {menu_items} = useContext(MainContext);

    const {pathname} = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    },[pathname])

    return (
        <div id="mainMenu" className="position-relative">
            <div className="container py-0 d-flex align-items-center 
            justify-content-between">
                <div className="">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="img-fluid" 
                        width={100} height={50} />
                    </Link>
                </div>
                <nav className="d-lg-flex align-items-center d-none">
                    {menu_items.map(((menuItem, index) => {
                        if (menuItem.slug === 'accueil') {
                            return (
                                <Link key={index} to={'/'} className="py-1 px-2 border 
                                border-primary rounded-pill mr-3" id="homeIcon"> 
                                    <HomeIcon className="text-primary"/>
                                </Link>
                            )
                        } else {
                            if (menuItem.type === 'button') {
                                return (
                                    <Link key={index} className="btn rounded-pill 
                                    text-primary border btn-outilne-primary border-primary 
                                    text-uppercase px-4 ml-4 scale" to={menuItem.slug}>
                                        {menuItem.name}
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link to={`/${menuItem.slug}`} key={index} className="text-uppercase 
                                    text-decoration-none text-primary py-5 px-2 
                                    position-relative nav-item">
                                        <div className="position-absolute w-100 bg-primary" 
                                        style={{
                                            bottom: 0,
                                            left:0,
                                            height: 0,
                                            zIndex: -1,
                                            transition: 'height 300ms 100ms ease'
                                        }}></div>
                                        {menuItem.name}
                                    </Link>
                                )
                            }
                        }
                    }))}
                    
                </nav>
                <Link to={'/membre'} className="btn btn-link text-primary 
                text-decoration-none d-none d-lg-inline-block" target="_blank">
                    <UserGroupIcon className="text-primary" size={25}/> Membres
                </Link>
                <button className="d-inline-block d-lg-none btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuIcon size={25} />
                </button>
            </div>
            <nav className="position-absolute w-100 bg-white overflow-hidden d-block" style={{
                top: "6rem",
                left: 0,
                zIndex: 10,
                transition: '300ms 100ms ease-in',
                height: `${isMenuOpen ? 'auto' : 0}`
            }}>
                {menu_items.map(((menuItem, index) => {
                    if (menuItem.type === 'button') {
                        return (
                            <Link key={index} className="btn rounded-pill text-primary border 
                            btn-outilne-primary border-primary text-uppercase px-4 scale ml-4 my-4" 
                            to={menuItem.slug}>
                                {menuItem.name}
                            </Link>
                        )
                    } else {
                        return (
                            <Link to={`/${menuItem.slug}`} key={index} className="text-uppercase 
                            text-decoration-none text-primary py-3 px-4 d-block position-relative 
                            nav-item border-bottom">
                                {menuItem.name}
                            </Link>
                        )
                    }
                }))}
                <Link to={'/membre'} className="btn btn-link text-primary text-decoration-none
                my-4" target="_blank">
                    <UserGroupIcon className="text-primary" size={25}/> Membres
                </Link>
            </nav>
        </div>
    )
}