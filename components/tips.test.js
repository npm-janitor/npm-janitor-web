import React from 'react'
import Tips from './tips'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let module = {
    errors: [],
    warnings: [],
    suggestions: []
  }
  const tree = renderer.create(
    <Tips module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
