// import React from 'react'
// import PropTypes from "prop-types"

//  Dentro de la function Header -> se pone llave para pasar el prop ( { ___})
function Header({ text, bgColor, textColor }) {
  // forma practica de pasar estilos para en haciendo una variable
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    // ---------> le pasamos nombre de la variable {headerStyle}
    <header style={headerStyle}>
      <div className="container">
        {/* Se le pasa el argumento text */}
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.8)',
  textColor: '#ff6c88',
};

// Esto define la propiedad de la aplicacion
//Header y luego propTypes luego =
// Header.PropTypes = {
//   text: PropTypes.string,
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
// }

export default Header;
