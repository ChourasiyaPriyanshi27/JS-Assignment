import React from "react";

class Search extends React.Component {

    state = {
        text : [] ,
        selectedText : null 
    }
    componentDidMount(): void {
        // this.onTextSearch('')
    }

    // onTextSearch = async searchText : any => {
    //     const res = await axios.get('' , {
    //         params : {
    //             q : searchText
    //         }
    //     })
       
    // }

    render() {
        return(
            <>
            <h2>Headings</h2>
            </>
        )
    }
}
export default Search