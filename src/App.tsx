import React, { FC } from 'react';
import Button, { Types, Sizes } from './components/Button';

const App: FC = () => {
	return (
		<>
			<h1>Ant Design Hooks</h1>
			<h2>Ant</h2>
			<hr />
			<Button>Default</Button>
			<Button danger type={Types.PRIMARY}>Primary Btn</Button>
			<Button danger size={Sizes.LARGE}>Danger Large Btn</Button>
			<Button disabled>Disabled Btn</Button>
			<Button disabled href="" type={Types.LINK}>Disabled Link</Button>
		</>
	);
};

export default App;
