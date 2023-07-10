import { Article } from "./Article";
import {shallow,mount} from 'enzyme'
import Table from "./Table";

describe("Article Page" , () => {
    it("click count" , () => {
        let wrapper = shallow(<Article />)
        expect(wrapper.find('.clicks-1').length).toEqual(1);
        // wrapper.find('button').simulate('click');
        // expect(wrapper.find('.clicks-2')).toEqual(2);
    })

    it("dive" , () => {
        let wrapper = shallow(<Article />)
        expect(wrapper.find(Table).dive().find('.custom-border').length).toBe(1)
    })
    
    it("sanpshot" , () => {
        let wrapper = shallow(<Table />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe("Mount" , () => {
      
    it("Mount" , () => {
        let wrapper = mount(<Article />)
        console.log(wrapper.debug())
    })
})