import {shallow} from 'enzyme'
import News from './News'

describe('instance , state,props ----', () => {
    it('instance testing',async () => {
        let wrapper = shallow(<News />)
        let anyfn = wrapper.instance().checkBoxChecked();
        expect(anyfn).toEqual({id:3})
    })

    it('Load Data function testing',async () => {
        let wrapper = shallow(<News />)
        return wrapper.instance().loadData().then(data => {
        expect(data).toEqual({me:12})
        });
    })
    it('jest spyOn componentdidMount',async () => {
        jest.spyOn(News.prototype,'componentDidMount');
        shallow(<News />)
        expect(News.prototype.componentDidMount).toHaveBeenCalled()
        expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1)
        News.prototype.componentDidMount.mockRestore()
 })

 it('props' , () => {
    let wrapper = shallow(<News />)
    let inputProp = wrapper.find('input').props();
    console.log(inputProp);
    let matchProp = {
        type:'text',
        id:'firstname',
        value:'codeImprove',
        name:'firstname'
    }
    expect(inputProp).toEqual(matchProp);
 })

//  it("Jest spyOn Func" , () => {
//     let wrapper = shallow(<News />)
//     let instance = wrapper.instance();
//     jest.spyOn(instance,'func');
//     wrapper.find('button').simulate('click')
//     expect(instance.func).toHaveBeenCalled();
//     expectc(instance.func).toHaveBeenCalledWith(90,80)
// })
})