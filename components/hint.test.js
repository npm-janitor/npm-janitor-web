import React from 'react'
import Hint from './hint'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Hint type='text'/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
