import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';
import { Types, Sizes } from '../button';

let mockFn: jest.Mock;

describe('Button', () => {
    beforeEach(() => {
        mockFn = jest.fn(() => {});
    });

	it('Should render a correct default button', () => {
        const wrapper = shallow(<Button />);
        
        expect(wrapper).toContainMatchingElement('button');
    });
    
    it('Should render a link when type equals link and href is provided', () => {
        const wrapper = shallow(<Button type={Types.LINK} href="/" />);

        expect(wrapper).toContainMatchingElement('a');
    });

    it('Should render a correct component with different classnames when button received different props', () => {
        const wrapper = shallow(<Button type={Types.PRIMARY} danger size={Sizes.LARGE} />);

        expect(wrapper).toHaveClassName('ant-btn ant-btn-primary ant-btn-danger ant-btn-large');
    });

    it('The onclick function should be called after the button is clicked', () => {
        const wrapper = shallow(<Button onClick={mockFn} />);

        wrapper.simulate('click');

        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('The onclick function should not called when disabled equals true', () => {
        const wrapper = shallow(<Button disabled={true} onClick={mockFn} />);
        
        wrapper.simulate('click', { preventDefault: () => {} });

        expect(mockFn.mock.calls.length).toBe(0);
    });

    it('Should render a corrent button when loading is provided', () => {
        const wrapper = shallow(<Button loading />);

        expect(wrapper.find('button')).toHaveClassName('ant-btn-only-icon ant-btn-loading');
    });

    it('Button - snapshot', () => {
        const wrapper = shallow(<Button size={Sizes.LARGE} type={Types.PRIMARY} loading />);

        expect(wrapper.render()).toMatchSnapshot();
    });
});
