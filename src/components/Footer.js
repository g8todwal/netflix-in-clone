import React from 'react';
import '../css/Footer.css';
import { Icon } from 'react-icons-kit';
import {ic_language} from 'react-icons-kit/md/ic_language';
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-span">
				<span> Questions? Call <span className="number">000-800-040-1843</span></span>
			</div>
			<div className="footer-column">
				<ul className="ul_footer">
					<li>FAQ</li>
					<li>Invester Relation</li>
					<li>Privacy</li>
					<li>Speed Test</li>
				</ul>
				<ul className="ul_footer">
					<li>Help Centre</li>
					<li>Jobs</li>
					<li>Cookie Prefrences</li>
					<li>Legal Notice</li>
				</ul>
				<ul className="ul_footer">
					<li>Accounts</li>
					<li>Way to watch</li>
					<li>Corporate Informaions</li>
					<li>Netflix Orignals</li>
				</ul> 
				<ul className="ul_footer">
					<li>Media Center</li>
					<li>Terms of Use</li>
					<li>Contact Us</li>
					<li></li>
				</ul>
			</div>
			<div className="lang-btn">
				<Icon icon={ic_language} size={20} />
				<span>&nbsp;&nbsp;English</span>
				<Icon icon={ic_arrow_drop_down} size={23} />
			</div>
			<div className="netflix">
				Netflix India <br /><br />
				Made By :- Gaurav Todwal (gauravtodwal56@gmail.com)
			</div>
		</div>
	);
}

export default Footer;