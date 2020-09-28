import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      
    <header>
      <img src="https://avatars2.githubusercontent.com/u/66549962?s=460&u=3c29cf4d030357b825581f82c62379328372efed&v=4" alt="Leonardo Dias"/>
      <div>
        <strong>Leonardo Dias</strong>
        <span>Developer</span>
      </div>
    </header>

      <p>
        Entusiasta das melhores tecnologias de Desemvolvimento Web
        <br /><br />
        Desenvolvedor Front End em constante evolução, sempre aplicando as melhores práticas de desenvolvimento aos meus alunos! 
      </p>
    
    <footer>
      <p>
        Preço/hora 
        <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;