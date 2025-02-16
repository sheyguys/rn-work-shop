import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import CustomInput from '../CustomInput';

describe('CustomInput', () => {
  test('renders input field with placeholder', () => {
    const {getByPlaceholderText} = render(
      <CustomInput
        label="name input"
        placeholder="Enter your name"
        value=""
        onChangeText={() => {}}
      />,
    );
    expect(getByPlaceholderText('Enter your name')).toBeTruthy();
  });

  test('allows text entry', () => {
    const onChangeTextMock = jest.fn();
    render(
      <CustomInput
        label="Text"
        placeholder="Enter text"
        value=""
        onChangeText={onChangeTextMock}
      />,
    );

    fireEvent.changeText(
      screen.getByPlaceholderText('Enter text'),
      'Hello World',
    );
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello World');
  });

  test('displays an error message', () => {
    const {getByRole} = render(
      <CustomInput
        label="Email"
        placeholder="Enter email"
        value=""
        onChangeText={() => {}}
        error="Invalid email"
      />,
    );
    expect(getByRole('text', {name: 'error message'})).toHaveTextContent(
      'Invalid email',
    );
  });

  test('keyboard type should be email when set', () => {
    render(
      <CustomInput
        label="Email"
        placeholder="Enter email"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
      />,
    );
    const input = screen.getByPlaceholderText('Enter email');
    expect(input.props.keyboardType).toBe('email-address');
  });

  test('secure text entry should be enabled when set', () => {
    render(
      <CustomInput
        label="Password"
        placeholder="Enter password"
        value=""
        onChangeText={() => {}}
        secureTextEntry
      />,
    );
    const input = screen.getByPlaceholderText('Enter password');
    expect(input.props.secureTextEntry).toBe(true);
  });

  test('input field should be accessible', () => {
    render(
      <CustomInput
        label="Name"
        placeholder="Enter name"
        value=""
        onChangeText={() => {}}
      />,
    );
    expect(screen.getByLabelText('Name')).toBeTruthy();
  });

  test('error message should be announced for accessibility', () => {
    render(
      <CustomInput
        label="Email"
        placeholder="Email"
        value=""
        onChangeText={() => {}}
        error="Invalid email"
      />,
    );
    expect(
      screen.getByText('Invalid email').props.accessibilityLiveRegion,
    ).toBe('assertive');
  });
});
