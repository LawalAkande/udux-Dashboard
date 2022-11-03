import styled from "styled-components";

export const SidebarStyled = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }

  .sidebar {
    width: 300px;
    position: fixed !important;
    left: 0;
    top: 0;
    height: 100%;
    transition: width 300ms;
    z-index: 5;
    background: #0f0f0f;
    overflow-y: scroll;
  }

  .sidebar-brand {
    height: 90px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    background-color: #282828;
    color: white;
    display: flex;
    align-items: center;
  }

  .sidebar-brand span {
    display: inline-block;
    padding-left: 1rem;
  }

  .sidebar-menu ul {
    padding-top: 2rem;
    text-align: left;
  }

  .list_span {
    padding: 0 15px;
    color: #d9d9d9;
  }

  .list_span .active {
    color: #fbba12;
  }

  .sidebar-menu li {
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
  }

  .sidebar-menu a {
    color: #d9d9d9;
    font-size: 16px;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .sidebar-menu a:hover {
    text-decoration: none;
    font-size: 18px;
  }

  .sidebar-menu a span:first-child {
    font-size: 16px;
    color: #d9d9d9;
    padding-right: 1rem;
  }

  .sidebar-menu a span:first-child:hover {
    color: #fbba12 !important;
  }

  header {
    position: fixed;
    left: 300px;
    width: calc(100% - 300px);
    top: 0;
    z-index: 100%;
    transition: left 300ms;
    background-color: #0f0f0f;
  }

  main {
    background: #e5e5e5;
    height: auto;
    margin-top: 83px;
    padding: 2rem 1.5rem;
  }

  #nav-toggle:checked + .sidebar {
    width: 70px;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand,
  #nav-toggle:checked + .sidebar li {
    padding-left: 1rem;
  }

  #nav-toggle:checked + .sidebar li a {
    padding-left: 0rem;
  }

  #nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
  #nav-toggle:checked + .sidebar li a span:last-child {
    display: none;
  }

  #nav-toggle:checked ~ .main-content {
    margin-left: 90px;
  }

  #nav-toggle:checked ~ .main-content header {
    width: calc(100% - 70px);
    left: 70px;
  }

  .main-content {
    transition: margin-left 300ms;
    margin-left: 300px;
  }

  @media only screen and (max-width: 768px) {
    main {
      margin-top: 72px;
    }

    .sidebar {
      z-index: 100%;
      left: -100% !important;
    }

    header h2 {
      display: flex;
      align-items: center;
      z-index: -1;
    }

    .main-content {
      width: 100%;
      margin-left: 0rem;
      background-color: #0f0f0f;
    }

    #nav-toggle:checked + .sidebar {
      left: 0 !important;
      width: 300px;
      padding-left: 20px;
    }

    #nav-toggle:checked + .sidebar .sidebar-brand,
    #nav-toggle:checked + .sidebar li {
      padding-left: 1rem;
      text-align: center;
    }

    #nav-toggle:checked + .sidebar li a {
      padding-left: 0rem;
    }

    #nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
    #nav-toggle:checked + .sidebar li a span:last-child {
      display: inline;
    }

    #nav-toggle:checked ~ .main-content {
      margin-left: 0rem !important;
    }
  }
`;
