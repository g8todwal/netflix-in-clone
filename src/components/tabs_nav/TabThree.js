import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {ic_check} from 'react-icons-kit/md/ic_check';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import '../../css/tabComp.css';

const TabThree = () => {
	return (
		<div className="container">
			<div className="tab-content">																																																																																																																																																																																																																																																																																																																																																																																																																		
				<span className="tabthree-span" > 
					{ " " } Choose one plan and watch everything on Netflix. { " " }
					<button className="tab-btn"><a href="https://netflix-clone-9f97a.web.app/">GET STARTED<Icon icon={ic_keyboard_arrow_right} size={20} /></a></button>		
				</span>
			</div>
			<div className="tab-table">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Mobile</th>
							<th>Basic</th>
							<th>Standard</th>
							<th>Premium</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Monthly Price</td>
							<td><span>&#8377;</span>199</td>
							<td><span>&#8377;</span>499</td>
							<td><span>&#8377;</span>649</td>
							<td><span>&#8377;</span>799</td>
						</tr>
						<tr>
							<td>HD available</td>
							<td><Icon icon={ic_close} size={10} /></td>
							<td><Icon icon={ic_close} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
						</tr>
						<tr>
							<td>Watch on your laptop and TV</td>
							<td><Icon icon={ic_close} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
						</tr>
						<tr>
							<td>Watch on your mobile phone and tablet</td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
						</tr>
						<tr>
							<td>Screens you can watch on at the same time</td>
							<td>1</td>
							<td>1</td>
							<td>2</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Unlimited movies and TV shows</td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
						</tr>
						<tr>
							<td>Cancel anytime</td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
							<td><Icon icon={ic_check} size={10} /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TabThree;