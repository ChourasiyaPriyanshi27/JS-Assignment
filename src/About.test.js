import About from './About'

import {shallow} from 'enzyme'

describe('About Page Testing' ,() => {
    it('Class Check' , () => {
        let wrapper = shallow(<About />)
       expect(wrapper.exists('.hicls')).toEqual(true)
       expect(wrapper.state()).toEqual({name:'priyanshi',id:111})
       expect(wrapper.contains(<div className="hicls">Hello</div>)).toEqual(true);
       expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true);
       expect(wrapper.containsAnyMatchingElements([<div>Hello</div>,<div>Hey</div>])).toEqual(true);
    })
})