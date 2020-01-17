import React from 'react';
import logo from '../../images/logo.svg';
import Overview from '../../images/overview.svg';
import Activity from '../../images/activity.svg';
import Balances from '../../images/balances.svg';
import Cards from '../../images/cards.svg';
import History from '../../images/history.svg';
import Recipients from '../../images/recipients.svg';
import Invite from '../../images/invite.svg';
import Settings from '../../images/settings.svg';
import Logout from '../../images/logout.svg';
import Help from '../../images/help.svg';


function Sidebar() {
  return (
    <section className="sidebar">
        <a href="/" className="sidebar-logo">
            <img src={logo} alt="logo"/>
        </a>

        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item active">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Overview} alt="Overview"/>
                        <span className="navigation__text">Overview</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Activity} alt="Activity"/>
                        <span className="navigation__text">Activity</span>
                        <div className="navigation__activity">2</div>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Balances} alt="Overview"/>
                        <span className="navigation__text">Balances</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Cards} alt="Overview"/>
                        <span className="navigation__text">Debit Cards</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={History} alt="Overview"/>
                        <span className="navigation__text">History</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Recipients} alt="Overview"/>
                        <span className="navigation__text">Recipients</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Invite} alt="Overview"/>
                        <span className="navigation__text">Invite</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="/">
                        <img className="navigation__icon" src={Settings} alt="Overview"/>
                        <span className="navigation__text">Settings</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="sidebar-footer">
            <a href="/" className="sidebar-footer__help">
                <img className="sidebar-footer__help-icon" src={Help} alt="help"/>
                Help?
            </a>
            <a className="sidebar-footer__logout" href="/">
                <img src={Logout} alt="logout"/>
            </a>
        </div>
    </section>
  );
}

export default Sidebar;
