import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<Link to='/'>{siteTitle}</Link>
			<Link to='/portfolio'>Portfolio</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/blog'>Blog</Link>
		</div>
	</header>
);

export default Header;
