const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/products">Products</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
        </ul>

        <button>Login</button>
        </nav>
    );
}

export default Navigation;