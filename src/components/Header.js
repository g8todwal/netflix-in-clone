import React from 'react';
import '../css/Header.css';
import logo from '../svg/logo.svg';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';

const Header = () => {

	return (
		<div className="header-container">
			<div className="header-top">
				<img
					className="header-logo" 
					src={logo} 
					alt="netflix-intro" />
				<NavLink className="sign-btn" to="">Sign In</NavLink>
			</div>
			<div  className="header-content">
				<h4 className="content1">Unlimited movies, TV <br />
				shows and more.</h4>
				<p className="content2">Watch anywhere. Cancel anytime.</p>
				<p className="content3">Ready to watch? Enter your email to create or restart your membership.</p>
				<form>
					<input type="text" 
						placeholder="Email Address" name="email" className="input"/>
					<button className="start-btn"><a href="https://netflix-clone-9f97a.web.app/"
					 >GET DEMO<Icon icon={ic_keyboard_arrow_right} size={30} /></a></button>	
				</form>
			</div>
		</div>
	);
}

export default Header;