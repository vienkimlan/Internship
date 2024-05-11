import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import React, { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="nav fixed top-0 w-full z-10">
            <NavLink to="/" className="site-title" >Site Name</NavLink>
            <div className="menu" 
                onClick={() => {
                setMenuOpen(!menuOpen);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <CustomLink to="/Speech_to_Text">Speech to Text</CustomLink>
                <CustomLink to="/Text_to_Speech">Text to Speech</CustomLink>
                <CustomLink to="/Ekyc_Vi">Ekyc Vi</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )

}