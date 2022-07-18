import argentBankLogo from "../assets/argentBankLogo.png"

function Header() {

    const URL = window.location.href

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
                {!(URL === "http://localhost:3000/user") ?
                    <div>
                        <a className="main-nav-item" href="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </a>
                    </div> :
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
                }
            </nav>
        </header>
    )
}

export default Header