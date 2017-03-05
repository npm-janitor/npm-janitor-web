import React from 'react'
import Header from './header'
import renderer from 'react-test-renderer'

jest.mock('next/router')

it('renders correctly', () => {
  let props = {full: false}
  const component = renderer.create(<Header {...props}/>)
  let tree = component.toJSON()

  let input = tree.children[0].children[1].children[0]
  input.props.onChange({target: {value: 'siddharthkp'}})
  input.props.onKeyUp({which: 65})
  input.props.onKeyUp({which: 13})

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
