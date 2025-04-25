import React, { useEffect, useState } from "react";

const ReactQueryy=()=>{

    const [data,setData]=useState([]);
    const [loder,setLoder]=useState(true);
    const [error,setError]=useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(res=>{
            setLoder(false);
            setData(res)
         })
        .catch(error=>setError(error));

    },[]);

    return (
        <>
            <h2>here is yur data..</h2>

            {
                loder && <h1>yoy data is fetcging .....</h1>
            }

            {
                data!==null &&
                data.map((d,idx)=>{
                    return(
                        <p key={idx}>{d.userId}{d.title}</p>
                    )
                })
            }

            {error!=null &&
                <p>{error}</p>
            }
        </>

    )

}

export default ReactQueryy;
