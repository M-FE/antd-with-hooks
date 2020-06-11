import React, { FC } from 'react';
import Button, { Types, Sizes, ButtonTypes } from './components/Button';
import './app.scss';
import './styles/index.scss';

const App: FC = () => {
	return (
		<div className="mt-2 mr-2 mb-2 ml-2">
			<h1>Ant Design Hooks</h1>
			<h2>Ant</h2>
			<hr />
			<Button>Default</Button>
			<Button className="ml-1" type={Types.PRIMARY} htmlType={ButtonTypes.SUBMIT}>Primary Btn</Button>
			<Button className="ml-1" danger type={Types.PRIMARY}>Primary Btn</Button>
			<Button className="ml-1" type={Types.DASHED}>Primary Btn</Button>
			<Button className="ml-1" type={Types.DASHED} ghost>Ghost Btn</Button>
			<Button className="ml-1" type={Types.PRIMARY} ghost>Primary Ghost Btn</Button>
			<Button className="ml-1" danger size={Sizes.LARGE}>Danger Large Btn</Button>
			<Button className="ml-1" disabled>Disabled Btn</Button>
			<Button className="ml-1" href="" type={Types.LINK}>Link</Button>
			<Button className="ml-1" disabled href="" type={Types.LINK}>Disabled Link</Button>
		</div>
	);
};

export default App;
