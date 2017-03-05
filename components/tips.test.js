import React from 'react'
import Tips from './tips'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let module = {
    errors: ['name is not valid'],
    warnings: ['Missing recommended field: contributors'],
    suggestions: ['Missing recommended field: engines']
  }
  const tree = renderer.create(
    <Tips module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
