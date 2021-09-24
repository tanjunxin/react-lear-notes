import { Fragment } from "react";
import { MyContext } from "./Context"

export default function FunSon(value) {
    return (
        <Fragment>
            <h2>--------------------------------</h2>
            <MyContext.Consumer>{value => {
                console.log(value);
                return (<h2>{value}</h2>)
            }}</MyContext.Consumer>
        </Fragment>
    )
}
