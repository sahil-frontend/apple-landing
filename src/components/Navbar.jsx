import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />
        <ul>
          {navLinks.map((link) => (
            <li key={link.lable}>
              <a href={link.lable}>{link.lable}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" />
          </button>
          <button>
            <img src="/cart.svg" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
