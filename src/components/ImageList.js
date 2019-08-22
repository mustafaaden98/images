import React from 'react';


// const ImageList = (props) =>{
//     console.log(props.images)
//     return(
//         <div>Image List</div>
//     )
// }

class ImageList extends React.Component{
    
    render(){
        console.log(this.props.images)
        return(
            <div>
                Image List
            </div>
        )
    }
}


export default ImageList;