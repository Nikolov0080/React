import React from 'react'
import Origam from '../origamis/origam';



const PostsUser = (props) => {

    if (props.props.length > 0) {
        return (
            <div>
            
                {props.props.map((x, i) => {
                    return <Origam key={i} index={i} {...x} />
                })}
            </div>
        )
    } else {
        return (
            <div>
                <h1> Loading posts... or no posts at all...</h1>
            </div>
        )
    }




}

export default PostsUser;