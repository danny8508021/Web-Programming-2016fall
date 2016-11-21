import React from 'react';
import { mount } from 'enzyme';

import CalcButton from '../CalcButton';

it('can assign extra class to button', () => {
  const element = mount(
    <CalcButton
      className="extra"
    >
      1
    </CalcButton>
  );

  expect(element.find('button').prop('className')).toMatch(/extra/);
});

it('call props.onClick when button be clicked', () => {
  const onClick = jest.fn();
  const element = mount(
    <CalcButton
      onClick={onClick}
    >
      1
    </CalcButton>
  );

  const button = element.find('button');
  button.simulate('click');

  expect(onClick).toBeCalled();
});


it('Test function "showNotImplemented"', () => {
  expect(typeof (CalcButton.defaultProps.onClick)).toBe('function');

  let tmp;
  console.warn = jest.fn((text) => { tmp = text; });

  CalcButton.defaultProps.onClick();
  expect(tmp).toBe('This function is not implemented yet.');
});
