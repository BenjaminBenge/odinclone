import logo from "../../src/assets/logo.svg";
export default function Header() {
  return (
    <div className="App">
      <ul>
      <li>
          <a href="news.asp">Button</a>
        </li>
      <li>
          <a href="news.asp">sun</a>
        </li>
      <li>
          <a href="news.asp">sign in</a>
        </li>
        <li>
          <a href="news.asp">Support Us</a>
        </li>
        <li>
          <a href="contact.asp">Community</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
        <li>
          <a href="contact.asp">All Paths</a>
        </li>
        <div className="navlogo">
          <li>
            <img src={logo} className="navigation-logo" alt="logo" />
          </li>
          </div>
      </ul>
    </div>
  );
}
