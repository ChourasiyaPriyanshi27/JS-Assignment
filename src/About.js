import React, {Component} from "react";
class About extends Component{
    constructor(props){
        super(props)
        this.state = {
           name:'priyanshi',
           id:111
        }
    }
  render(){
    return(
        <>
        About
        <div className="hicls">Hello</div>
        </>
    )
  }
}
export default About