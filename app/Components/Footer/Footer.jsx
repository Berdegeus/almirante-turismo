import Image from "next/image";
import Logo from "../../../public/static/Logo.png";
import "./footer.css";

const Footer = () => (
  <div className="react__footer section__padding">
    <div className="react__footer-links">
      <div className="react__footer-links_logo">
        <Image src={Logo} alt="logo" height={169} width={300} />
      </div>
      <div className="react__footer-links_div">
        <h4>Links</h4>
        <p>Prefeitura</p>
        <p>Midias sociais</p>
        <p>Diario oficial</p>
        <p>Contato</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Juridico</h4>
        <p>Termos e Condições</p>
        <p>Politica de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="react__footer-links_div">
        <h4>Entre em contato</h4>
        <p>Bernardo Roorda de Geus</p>
        <p>(41) 99119-8023</p>
        <p>contato@benz.com</p>
      </div>
    </div>

    <div className="react__footer-copyright">
      <p>@2023 Benz. All rights reserved.</p>
      <p>Almirante turimo</p>
    </div>
  </div>
);

export default Footer;
