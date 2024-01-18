import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link aria-label="to home " href="/ ">
        Header
      </Link>
    </div>
  );
}

export default Header;
