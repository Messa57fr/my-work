import './index.scss';
import Logo from '../../assets/images/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="logo" />
      <span>Samuel</span>
      <span>Coizet</span>
    </Link>
    <nav>
      <NavLink exact = "true" activeclassname="active" to="/">
        <FontAwesomeIcon icon = {faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact = "true" activeclassname="about-link" to="/about">
        <FontAwesomeIcon icon = {faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact = "true" activeclassname="contact-link" to="/contact">
        <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
        target ="_blank"
        href="https://www.linkedin.com/in/samuel-coizet/"
        rel="noreferrer"
        >
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
        target ="_blank"
        href="https://www.github.com/messa57fr"
        rel="noreferrer"
        >
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
