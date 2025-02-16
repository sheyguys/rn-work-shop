import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import CustomInput from '../CustomInput';

describe('CustomInput Component', () => {
  test('renders input field with placeholder', () => {
    render(
      <CustomInput
        placeholder="Enter your name"
        value=""
        onChangeText={() => {}}
      />,
    );
    expect(screen.getByPlaceholderText('Enter your name')).toBeTruthy();
  });

  test('allows text entry', () => {
    const onChangeTextMock = jest.fn();
    render(
      <CustomInput
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
    render(
      <CustomInput
        placeholder="Email"
        value=""
        onChangeText={() => {}}
        error="Invalid email"
      />,
    );
    expect(screen.getByText('Invalid email')).toBeTruthy();
  });

  test('keyboard type should be email when set', () => {
    render(
      <CustomInput
        placeholder="Email"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
      />,
    );
    const input = screen.getByPlaceholderText('Email');
    expect(input.props.keyboardType).toBe('email-address');
  });

  test('secure text entry should be enabled when set', () => {
    render(
      <CustomInput
        placeholder="Password"
        value=""
        onChangeText={() => {}}
        secureTextEntry
      />,
    );
    const input = screen.getByPlaceholderText('Password');
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
