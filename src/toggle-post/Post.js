
import React, { useState } from 'react'

function Post(props) {

    const [hidden, setHidden] = useState(true); // use state for controlling buttons.

    const fullContent = () => {  // it display full content of post.
        // show Full Post
        setHidden(false)   // hidden = false
    }
 
    const lessContent = () => {  // it short the content of post.
        // Show Less Post
        setHidden(true)
    }


    // check length of post content

    if(props.children.length < props.maxLength){

        return (
          // return whole content

            <div className="post">
               <p className="article"> { props.children } </p>
            </div>
        )

    }else{

        // add functionality of read more and read less button
        return (
            <div className="post"> 

             <p className="article">
                     {/** apply condition for content */}
                {
                hidden  // if hidden is true then display slice & trimmed content.
                  ?
                  props.children.substr(0,80).trim()
                  :
                  props.children   // otherwise display fulle content
                }

             </p>   

                {/** Apply condition for Button */}

                {
                    hidden // if true then display read more button
                    ?
                    <button className="read-more" onClick={fullContent}>Read More</button>
                    :       
                    <button className="read-less" onClick={lessContent}>Read Less</button>
                }

            </div>
        )
    }



   
}

export default Post
