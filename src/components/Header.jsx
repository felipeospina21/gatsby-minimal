import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<Link to='/'>{siteTitle}</Link>
			<Link to='/contact'>contact</Link>
		</div>
	</header>
);

export default Header;
