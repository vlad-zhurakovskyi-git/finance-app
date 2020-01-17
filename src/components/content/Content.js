import React from 'react';
import Plus from '../../images/plus.svg';
import Search from '../../images/search.svg';
import Notifications from '../../images/notifications.svg';
import Avatar from '../../images/avatar.png';
import Caret from '../../images/caret.svg';
import Date from '../../images/date.svg';

function Content() {
  return (
    <section className="content">
        <div className="container">
            <div className="content-header">
                <h1 className="content-header__title">Overview</h1>

                <div className="content-header__nav">
                    <button type="button" className="btn__add">
                        <img src={Plus} alt="add"/>
                    </button>

                    <button type="button" className="content-header__btn">
                        <img src={Search} alt="Search"/>
                    </button>

                    <button type="button" className="content-header__btn">
                        <img src={Notifications} alt="Notifications"/>
                        <div className="content-header__notification">4</div>
                    </button>

                    <button type="button" className="content-header__avatar">
                        <img src={Avatar} alt="avatar"/>
                        <img className="caret" src={Caret} alt="caret"/>
                    </button>
                </div>
            </div>

            <div className="content-balances">
                <h3 className="content-balances__title">Balances</h3>
                <div className="content-date">
                    <img src={Date} alt="date"/>
                    <span className="content-date__text">Current Week</span>
                    <img className="caret" src={Caret} alt="caret"/>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Content;
