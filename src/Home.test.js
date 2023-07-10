import Home from "./Home";
import {shallow} from 'enzyme'
 
describe("Shallow enzyme",() => {
    it('Object check',() => {
        let wrapper = shallow(<Home />)
       // console.log(wrapper.debug());
       expect(wrapper.exists('.homecls')).toEqual(true);
    })
})