import { faGlobe, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoSpotify from "../../assets/icons/logo-spotify.png";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="">
            <img src={LogoSpotify} alt="Logo do Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span className="fa fas fa-book"></span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa fa-plus"></span>
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="">Cookies</a>
        </div>
        <div className="languages">
          <button className="languages__button">
            <span>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
