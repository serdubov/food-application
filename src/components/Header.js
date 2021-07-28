import React from 'react'

function Header({clickay}) {
    return (
        <div className="headerApp">
            <div className='headerLogo'>
                <img src="plantLogo.png" width={90} height={100} alt='logo'></img>
                <div className='headerLogoText'>
                    <h1 >COMPARE IT</h1>
                    <span>Рейтинговая оценка кормов</span>
                </div>
            </div>
            <div className='headerTextPart'>
                <div className='headerNavigation'>
                    <ul>
                        <li onClick={clickay}>Сравнительная таблица</li>
                        <li>Описание добавок</li>
                    </ul>
                </div>
                <div className='headerAdministration'>
                    <div>Войти</div>
                    <i className="fas fa-user-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;