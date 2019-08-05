import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css'

const Nav = () => (
  	<div>
	    <Link href="/">
	      <a>Home</a>
	    </Link>
	    <Link href="/books">
	      <a>Books</a>
	    </Link>
	    <Link href="/profile">
	      <a>Profile</a>
	    </Link>
  	</div>
);

export default Nav;