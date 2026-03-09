import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

export default function Footer() {
    return (
        <footer>
            <span>If you want to learn how to build this project and more, check out this</span>
            <a className="scrimba-link" href="https://scrimba.com/learn-react-c0e?via=u01afpl" target="_blank" rel="noopener noreferrer">
                Scrimba React Course.
            </a>
            <div className='links'>
                <a href="https://www.linkedin.com/in/filip-szkarlat-szczepaniak/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/filipszkarlat" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://filipszkarlatportfolio.netlify.app//" target="_blank" rel="noopener noreferrer">
                    <VscAccount />
                </a>
            </div>
            <p>© 2026 Travel Journal. All rights reserved.</p>
        </footer>
    )
}