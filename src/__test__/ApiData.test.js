import React from 'react';
import renderer from 'react-test-renderer';
import FetchQuote from '../components/ApiData';

describe('FetchQuote', () => {
  test('should match the snapShot', () => {
    const component = renderer.create(<FetchQuote />);
    const instance = component.toJSON();
    expect(instance).toMatchSnapshot();
  });
});
