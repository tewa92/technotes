import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tewachew S. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Bole City, Tewachew S. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Tewachew S. Repairs<br />
                    555 Bole Drive<br />
                    Bole City, Addis Ababa 12345<br />
                    <a href="tel:+251954169687">+251 9-54-16-96-87</a>
                </address>
                <br />
                <p>Owner: Tewachew Saleigizer</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public