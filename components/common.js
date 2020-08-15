import React from "react";

export const P = ({ children, className = "", style = {} }) => (
  <p style={style} className={`leading-normal mb-8 ${className}`}>
    {children}
  </p>
);

export const UL = ({ children, className = "", style = {} }) => (
  <ul
    style={style}
    className={`leading-normal mb-8 list-disc list-inside ${className}`}
  >
    {children}
  </ul>
);

export const H1 = ({ children, className = "", style = {} }) => (
  <h1 style={style} className={`text-4xl ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "", style = {} }) => (
  <h2 style={style} className={`text-3xl mb-2 mt-12 font-bold ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "", style = {} }) => (
  <h3 style={style} className={`text-3xl mb-2 mt-12 font-bold ${className}`}>
    {children}
  </h3>
);

// export const CODE = (props) => <pre {...props} />;

export const BlockQuote = ({ children, className = "", style }) => (
  <blockquote
    style={style}
    className={`${className} border-l-4 border-orange pl-8 pt-4 pb-4 italic bg-text-background-black`}
  >
    {children}
  </blockquote>
);
