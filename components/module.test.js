import React from 'react'
import Module from './module'
import renderer from 'react-test-renderer'

it('renders valid module', () => {
  let module = {
    name: 'module',
    valid: true,
    errors: [],
    warnings: [],
    suggestions: []
  }
  const tree = renderer.create(
    <Module module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders invalid module', () => {
  let module = {
    name: 'module',
    valid: false,
    errors: ['name is not allowed'],
    warnings: [],
    suggestions: []
  }
  const tree = renderer.create(
    <Module module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
