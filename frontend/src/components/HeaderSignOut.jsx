import argentBankLogo from "../assets/argentBankLogo.png"

function HeaderSignOut() {

    return (
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="/user">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </a>
                    <a className="main-nav-item" href="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default HeaderSignOut