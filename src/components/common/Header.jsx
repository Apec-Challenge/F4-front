import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import useAuth from 'src/hook/auth/useAuth';
import Logo from 'src/images/logo_color.png';
import auth from 'src/modules/auth';

const Header = ({ history }) => {
  const { onAuth, onLogout, authLogin, authLogout, loginLoading } = useAuth(history);
  const [login, setLogin] = useState(false);
  const onShow = () => {
    document.querySelector('.form-search').style.display = 'block';
    document.querySelector('#searchForm').style.display = 'block';
  };
  const onHide = () => {
    document.querySelector('.form-search').style.display = 'none';
    document.querySelector('#searchForm').style.display = 'none';
  };
  const onChange = e => {
    console.log(e.target.value);
  };
  useEffect(() => {
    if (authLogin) {
      const { cookie } = document;
      setLogin(true);
      sessionStorage.setItem('userInfo', JSON.stringify(authLogin));
      sessionStorage.setItem('cookie', cookie);
    } else if (!authLogin) {
      setLogin(false);
    }
  }, [authLogin]);
  useEffect(() => {
    if (authLogout) {
      setLogin(false);
      onAuth();
    }
  });
  return (
    <header id="header" className="site-header">
      <div className="container">
        <div className="site-brand">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
        </div>
        <div className="right-header">
          <nav className="main-menu">
            <button type="button" className="c-hamburger c-hamburger--htx">
              <span />
            </button>
            <ul>
              <li>
                <Link to="/about">
                  About Us
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/fund/list">
                  Funding
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/fund/list">List</Link>
                  </li>
                  <li>
                    <Link to="/fund/create">Create</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/place/list">
                  Place
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/place/list">List</Link>
                  </li>
                  <li>
                    <Link to="/place/create">Create</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="search-icon">
            <div
              className="fa fa-search"
              aria-hidden="true"
              onClick={onShow}
              style={{ cursor: 'pointer' }}
            />
            <div className="form-search" onClick={onHide} />
            <form id="searchForm">
              <input
                type="text"
                value=""
                name="search"
                placeholder="Search..."
                onChange={onChange}
              />
              <button type="submit" value="">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="login login-button login-logout">
            {authLogin && !loginLoading && (
              <nav className="main-menu">
                <ul className="login-username">
                  <li>
                    <Link to="/mypage/profile">
                      {authLogin.nickname}
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/mypage/profile">mypage</Link>
                      </li>
                      <li>
                        <Link to="/mypage/cache">cache add</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            )}
            {login ? (
              <button className="btn-primary" type="button" onClick={onLogout}>
                Logout
              </button>
            ) : (
              <Link to="/auth" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
