import React, { Component } from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme'

test('Header',()=>{
 const wrapper = shallow(<Header/>)
 expect(wrapper).toMatchSnapshot() 
 // expect(wrapper.find('h1').text()).toBe('Expensify')
 // const renderer= new ReactShallowRenderer()
 // renderer.render(<Header/>)
 // expect(renderer.getRenderOutput()).toMatchSnapshot()
})