import '../styles/components/sidebar.sass'

import Avatar from '../img/profile.jpg'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alice Dias"/>
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>Informações de contacto</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar