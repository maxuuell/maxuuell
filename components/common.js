import React from "react";

export const P = ({ children, className = "", style = {} }) => (
  <p style={style} className={`leading-loose mb-6 ${className}`}>
    {children}
  </p>
);

export const H1 = ({ children, className = "", style = {} }) => (
  <h1 style={style} className={`text-3xl md:text-5xl ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "", style = {} }) => (
  <h2 style={style} className={`text-4xl mb-6 ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "", style = {} }) => (
  <h3 style={style} className={`text-3xl mb-6 ${className}`}>
    {children}
  </h3>
);

export const CODE = (props) => <pre {...props} />;
