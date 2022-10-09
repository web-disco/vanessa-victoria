import Img from "next/future/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed z-[10] text-brown px-[25px] my-4">
      <Link href="/">
        <a title="Home">
          <Img
            src="/assets/logo-sage.svg"
            alt="Vanessa Victoria"
            width="180"
            height="80"
          />
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
