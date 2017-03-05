import React from 'react'
import User from './user'
import renderer from 'react-test-renderer'

jest.mock('../api/user')

it('renders correctly', () => {
  let url = {query: {name: 'siddharthkp'}}
  return User.getInitialProps(url)
  .then(props => {
    Object.assign(props, {url})
    const tree = renderer.create(
      <User {...props}/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
