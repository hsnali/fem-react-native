import React from 'react';
import { render, toJSON } from '@testing-library/react-native';
import { toHaveStyle } from '@testing-library/jest-native';
import { ColorBox } from './colorBox';

expect.extend({ toHaveStyle });

const props = {
  name: 'Red',
  code: '#F00',
};

let wrapper = render(<ColorBox {...props} />);

it('snapshot test', () => {
  const { container } = wrapper;

  expect(container).toMatchSnapshot();
});

it('renders color name', () => {
  const { getByText } = wrapper;
  const text = getByText(props.name, { exact: false });

  expect(text).toBeTruthy();
});

it('renders color value', () => {
  const { getByText } = wrapper;
  const text = getByText(props.code, { exact: false });

  expect(text).toBeTruthy();
});

it('sets background color', () => {
  const { container } = wrapper;
  const [root] = container.children;
  const style = {
    backgroundColor: props.code,
  };

  expect(root).toHaveStyle(style);
});
