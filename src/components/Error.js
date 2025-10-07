import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <p>Page not found</p>
            <p>{err.status + " : " + err.statusText}</p>
        </div>
    )
}

export default Error;