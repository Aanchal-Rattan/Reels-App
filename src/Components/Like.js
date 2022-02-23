import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

function Like({userData,postData}) {
    // console.log(userData.userData.userId)
    // console.log(postData.likes)
    const [like, setLike] = useState(null);
    // console.log(database.posts.doc(postData.postId))
    useEffect(() => {
        let check = postData?.likes.includes(userData.userData.userId) ? true : false
        setLike(check)
    }, [postData,userData])

    const handleLike = () => {
        if(like == true){
            let narr = postData.likes.filter((el)=>el!=userData.userData.userId)
            // console.log(narr)

            database.posts.doc(postData.postId).update({
                likes:narr

            })
        }else{
            let narr = [...postData.likes,userData.userData.userId]
            database.posts.doc(postData.postId).update({
                likes:narr

            })
            // console.log(narr)

        }
    }
    
    return (
        <div>
            {
                like != null ?
                    <>
                        {
                            like == true ? <FavoriteIcon className={`icon-styling like`}  onClick={handleLike} /> : <FavoriteIcon className={`icon-styling unlike`} onClick={handleLike}  />
                        }
                    </> :
                    <></>
            }
        </div>
    )
}

export default Like