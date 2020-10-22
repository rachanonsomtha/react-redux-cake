import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HookCakeContainer() {

    const numOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>[hook]Num of cake- {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HookCakeContainer
