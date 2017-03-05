import React from 'react'
import Heavy from './heavy'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Heavy>This is some bold text</Heavy>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
