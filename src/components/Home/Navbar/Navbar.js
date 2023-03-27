import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
 <nav className="navigation">
      <a href="/" className="brand-name">
        Bookshop
      </a>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Books</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <h2 className="seeCarrito">🛒</h2>
    </nav>
    </div>
  )
}

export default Navbar