import React from 'react'
import Input from './input'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Input type='text'/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
