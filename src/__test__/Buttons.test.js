import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

describe('Buttons', () => {
  test('should render the Button component', () => {
    const handleInput = jest.fn();

    const component = renderer.create(
      <Buttons text="1" className="my-class" clickEvent={handleInput} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.root;
    expect(tree.findByType('button').props.children).toBe('1'); // Updated assertion
  });
});
