import { wrap } from "@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils";
import Blog from "./Blog";
import {shallow} from 'enzyme'

describe("Blog check" , () => {
    it("find Blog" , () => {
     let wrapper = shallow(<Blog />)
     expect(wrapper.find('.liCls').length).toBe(3)
  })
  it("At and Key" , () => {
    let wrapper = shallow(<Blog />)
    expect(wrapper.find('.liCls').at(0).key()).toBe('angular')
    expect(wrapper.find('.liCls').at(1).key()).toBe('node')
 })
 it("child check " , () => {
    let wrapper = shallow(<Blog />)
    expect(wrapper.find('.numbers').childAt(0).type()).toBe('span')
  
 })
 it("ul children check " , () => {
    let wrapper = shallow(<Blog />)
    expect(wrapper.find('ul').children().length).toBe(3)
  })

  it("hasclass check " , () => {
    let wrapper = shallow(<Blog />)
    expect(wrapper.find('.my-button').hasClass('btn-primary')).toBe(true)
  })

  it("is check " , () => {
    let wrapper = shallow(<Blog />)
    expect(wrapper.is('.mainCls')).toBe(true)
  })
})