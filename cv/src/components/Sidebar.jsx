import Avatar from '../img/profile.jpg'

import '../styles/components/sidebar.sass'

import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alice Dias"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <p>Informações de contacto</p>
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar