import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import tabpic from '../../images/tab-1-pic.png'
import '../../css/tabComp.css';

const TabOne = () => {
	return (
		<div className="container">
			<div className="tab-content">
				<span>
					If you decide Netflix isn't for you - No problem, No commitment. Cancel online anytime. <br />
					<button className="tab-btn"><a href="https://netflix-clone-9f97a.web.app/">GET STARTED<Icon icon={ic_keyboard_arrow_right} size={20} /></a></button>		
				</span>
				<br />
				<img src={tabpic} alt="tab-pic" className="tab-one-img" />
			</div>				
		</div>
	);
}

export default TabOne;