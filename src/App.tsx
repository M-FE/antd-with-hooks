import React, { FC } from 'react';
import Button, { Types, Sizes, ButtonTypes } from './components/Button';
import Menu from './components/Menu';
import './app.scss';
import './styles/index.scss';
import { Shapes } from './components/Button/button';
import { AiOutlineGithub } from 'react-icons/ai';

const App: FC = () => {
	return (
		<div className="mt-2 mr-2 mb-2 ml-2">
			<h1>Ant Design Hooks</h1>
			<hr />
			<div>
				<Button>Default</Button>
				<Button className="ml-1" type={Types.PRIMARY} htmlType={ButtonTypes.SUBMIT}>Primary Btn</Button>
				<Button className="ml-1" type={Types.PRIMARY} shape={Shapes.ROUND}>Primary Btn</Button>
				<Button className="ml-1" type={Types.PRIMARY} shape={Shapes.CIRCLE}>Btn</Button>
				<Button className="ml-1" danger type={Types.PRIMARY}>Primary Btn</Button>
				<Button className="ml-1" type={Types.DASHED}>Primary Btn</Button>
				<Button className="ml-1" type={Types.DASHED} ghost>Ghost Btn</Button>
				<Button className="ml-1" type={Types.PRIMARY} ghost>Primary Ghost Btn</Button>
				<Button className="ml-1" danger size={Sizes.LARGE}>Danger Large Btn</Button>
				<Button className="ml-1" type={Types.PRIMARY} size={Sizes.SMALL}>Primary Small Btn</Button>
				<Button className="ml-1" disabled>Disabled Btn</Button>
				<Button className="ml-1" href="" type={Types.LINK} target="_blank">Link</Button>
				<Button className="ml-1" disabled href="" type={Types.LINK}>Disabled Link</Button>
				<Button className="ml-1 mt-1" type={Types.PRIMARY} block>Primary Block Btn</Button>
				<Button className="ml-1 mt-1" type={Types.PRIMARY} block loading>Primary Block Loading Btn</Button>
				<Button loading />
				<Button icon={<AiOutlineGithub />} />
				<Button icon={<AiOutlineGithub />} size={Sizes.LARGE} />
				<Button icon={<AiOutlineGithub />} size={Sizes.SMALL} />
				<Button icon={<AiOutlineGithub />} shape={Shapes.CIRCLE} />
				<Button icon={<AiOutlineGithub />} shape={Shapes.CIRCLE} size={Sizes.LARGE} />
				<Button icon={<AiOutlineGithub />} shape={Shapes.CIRCLE} size={Sizes.SMALL} />
				<Button className="ml-1 mt-1" type={Types.PRIMARY} block icon={<AiOutlineGithub className="123" title="444" />}>Primary Block Icon Btn</Button>
			</div>
			<hr />
			<div>
				<Menu>
					<Menu.Item key="FE">Front-End</Menu.Item>
					<Menu.Item key="BE">Back-End</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default App;
