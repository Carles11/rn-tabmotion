import React from 'react';
import { render } from '@testing-library/react-native';
import TabMotion from '../TabMotion';

test('renders TabMotion component correctly', () => {
  const { getByTestId } = render(<TabMotion />);
  expect(getByTestId('tab-motion')).toBeTruthy();
});
