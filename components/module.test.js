import React from 'react'
import Module from './module'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let module = {
    name: 'module',
    errors: [],
    warnings: [],
    suggestions: []
  }
  const tree = renderer.create(
    <Module module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
