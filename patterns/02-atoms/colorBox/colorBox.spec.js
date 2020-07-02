import React from 'react';
import { render } from '@testing-library/react-native';
import { toHaveStyle } from '@testing-library/jest-native';

// Component
import { ColorBox } from './colorBox';

expect.extend({ toHaveStyle });

const props = {
  colorName: 'Red',
  hexCode: '#F00',
};

let wrapper = render(<ColorBox {...props} />);

it('snapshot test', () => {
  const { container } = wrapper;

  expect(container).toMatchSnapshot();
});

it('renders color name', () => {
  const { getByText } = wrapper;
  const text = getByText(props.colorName, { exact: false });

  expect(text).toBeTruthy();
});

it('renders color value', () => {
  const { getByText } = wrapper;
  const text = getByText(props.hexCode, { exact: false });

  expect(text).toBeTruthy();
});

it('sets background color', () => {
  const { container } = wrapper;
  const [root] = container.children;
  const style = {
    backgroundColor: props.hexCode,
  };

  expect(root).toHaveStyle(style);
});
