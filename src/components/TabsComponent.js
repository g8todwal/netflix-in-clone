import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/Tabs.css';
import Door from './tabs_nav/Door.js';
import Devices from './tabs_nav/Devices.js';
import Price from './tabs_nav/Price.js';
import TabOne from './tabs_nav/TabOne';
import TabTwo from './tabs_nav/TabTwo';
import TabThree from './tabs_nav/TabThree';

const TabsComponent = () => {

	const [tabIndex, setTabIndex] = useState(0)

	return (
		<div>
			<Tabs 
				className="tabs"
				selectedIndex={tabIndex}
				onSelect={tabIndex => setTabIndex(tabIndex)}
			>
				<TabList className="tab-list">
			    	<Tab className={`tab tab1 ${tabIndex === 0 && "tab-selected active"}`} >
			    		<Door />
			    		<p className="para-tab-1">
				    		<strong>
				    			No Commitments <br />
				    			Cancel online at anytime
				    		</strong>
			    		</p>
			    	</Tab>
			    	<Tab className={`tab tab2 ${tabIndex === 1 && "tab-selected active"}`} >
			    		<Devices />
			    		<p style={{marginTop: '-6.00rem'}} className="para-tab-2" >
			    			<strong>
			    				Watch anywhere
			    			</strong>
			    		</p>
			    	</Tab>
			    	<Tab className={`tab tab3 ${tabIndex === 2 && "tab-selected active"}`}>
			    		<Price />
			    		<p className="para-tab-3">
				    		<strong>
				    			Pick your price
				    		</strong>
			    		</p>
			    	</Tab>
			    </TabList>
			    <TabPanel>
			    	<TabOne />
			    </TabPanel>
			    <TabPanel>
			    	<TabTwo />
			    </TabPanel>
			    <TabPanel>
			    	<TabThree />
			    </TabPanel>
			</Tabs>
		</div>
	)
}

export default TabsComponent;