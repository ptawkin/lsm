import './Header.scss';

function Header() {
    return (
        <header className='Header'>
            <div className='Header__heading'>
                Заголовок
            </div>
            <div className={'Header__content'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </header>
    );
}

export default Header;
