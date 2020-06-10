import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, .navbar-container, .MuiDialogTitle-root, .nav-btn, button, .btn, .btn-cv-download{    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};    
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  .nav-btn, button, .btn-cv-download{
    color: ${({ theme }) => theme.iconColor};
    outline: none !important;
  }
  .navbar-container, .nav-btn, button, .btn-cv-download{
    box-shadow: ${({ theme }) => theme.shadow};
    border:none;
    border-radius: 15px;
  }
  .nav-btn:hover, .nav-btn:active, .nav-btn:focus, button:hover, button:active, .s-b-bar{
    box-shadow: ${({ theme }) => theme.clickedShadow};
}
.resume-container h1, .projects-container h1, .contact-container h1, .fw-text{
    color: ${({ theme }) => theme.text};
    font-size:2.5em;
}
.sub-text{
    color: ${({ theme }) => theme.subText};
}
.home-container{
    filter: ${({ theme }) => theme.filterClr};
}
.skill-set-container, .phn, .mail, .social-links, .my-image{
    box-shadow: ${({ theme }) => theme.shadow};
}
.about-text{
    color: ${({ theme }) => theme.text};
}
}
`;

