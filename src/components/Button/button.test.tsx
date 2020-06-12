import React from 'react';
import { shallow } from 'enzyme';
import Button from './';
import { Types, Sizes } from './button';
import { genSelector } from '../_utils/test';

let mockFn: jest.Mock;

beforeEach(() => {
    mockFn = jest.fn(() => {});
});

describe('Button', () => {
	it('Should render a correct default button', () => {
        const wrapper = shallow(<Button />);
        
        expect(wrapper).toContainMatchingElement('button');
    });
    
    it('Should render a link when type equals link and href is provided', () => {
        const wrapper = shallow(<Button type={Types.LINK} href="/" />);

        expect(wrapper).toContainMatchingElement('a');
    });

    it('Should render a correct component with different classnames when Button received different props', () => {
        const wrapper = shallow(<Button type={Types.PRIMARY} danger size={Sizes.LARGE} />);

        expect(wrapper).toHaveClassName('ant-btn ant-btn-primary ant-btn-danger ant-btn-large');
    });

    it('The onclick function should be called after the Button is clicked', () => {
        const wrapper = shallow(<Button onClick={mockFn} />);

        wrapper.simulate('click');

        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('The onclick function should not called when disabled equals true', () => {
        const wrapper = shallow(<Button disabled={true} onClick={mockFn} />);
        
        wrapper.simulate('click', { preventDefault: () => {} });

        expect(mockFn.mock.calls.length).toBe(0);
    });
});
