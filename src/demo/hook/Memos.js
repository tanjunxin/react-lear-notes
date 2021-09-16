import React, { useState, useMemo, Fragment } from 'react'

// 计算和的函数，开销较大
function calcNumber(count) {
    console.log("compute, calcNumber重新计算");
    let total = 0;
    for (let i = 1; i <= count * 10; i++) {
        total += i;
    }
    return total;
}

function Memos() {
    // eslint-disable-next-line
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    const expensive = useMemo(() => {
        return calcNumber(count)
    }, [count])
    const double = useMemo(() => {
        console.log('double')
        return count * 2
        // eslint-disable-next-line
    }, [count === 2])
    return (
        <Fragment>
            <h2>{num}</h2>
            <h2>{count}</h2>
            <h2>{expensive}</h2>
            <h2>{double}</h2>
            <button onClick={setCount(count + 1)}>点击改变memo的count</button>
            <button onClick={setNum(num + 1)}>点击改变memo的num</button>
        </Fragment>
    )
}

export default Memos
