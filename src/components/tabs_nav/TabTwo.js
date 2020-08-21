import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import tabpic2 from '../../images/tab-macbook.png'
import tabpic1 from '../../images/tab-tablet.png'
import tabpic3 from '../../images/tab-tv.png'
import '../../css/tabComp.css';

const TabTwo = () => {
	return (
		<div className="container">
			<div className="tab-content">
				<span>
					{" "} Watch TV shoes and movies anytime, anywhere - <br />
					personalised for you. { " " }
					<button className="tab-btn"><a href="https://netflix-clone-9f97a.web.app/">GET STARTED<Icon icon={ic_keyboard_arrow_right} size={20} /></a></button>		
				</span>
			</div>
			<div className="tab-content">
				<img src={tabpic1} alt="tab-pic-1" className="tab-two-img" />
				<img src={tabpic2} alt="tab-pic-2" className="tab-two-img" />
				<img src={tabpic3} alt="tab-pic-3" className="tab-two-img" />
			</div>
		</div>
		
	);
}

export default TabTwo;