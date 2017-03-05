import React from 'react'
import Code from './code'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Code/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
