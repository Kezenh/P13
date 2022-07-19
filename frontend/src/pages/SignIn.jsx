import getSignInToken from "../services/getSignInToken"
import getUserDatas from "../services/getUserDatas"
import { store, tokenFetched, datasFetched } from "../redux/store"

function SignIn() {

    async function submitSignIn() {
        await dispatchToken()
        console.log(store.getState().token)
        await dispatchDatas()
        console.log(store.getState().datas)
    }

    async function dispatchToken() {
        const username = document.getElementById("username")
        const password = document.getElementById("password")
        const token = await getSignInToken(username, password)
        store.dispatch(tokenFetched(token))
    }

    async function dispatchDatas() {
        const datas = await getUserDatas(store.getState().token)
        store.dispatch(datasFetched(datas))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <input type="button" className="sign-in-button" value="Sign In" onClick={submitSignIn} />
                </form>
            </section>
        </main>
    )
}

export default SignIn