import React, { useState } from "react";



let Mydata = [
    {
        no: "1", no1: "2"
    },
    {
        no: "3", no1: "4"
    },
    {
        no: "5", no1: "6"
    },
    {
        no: "7", no1: "8"
    }
]

function Mylist() {
    const [list, setlist] = useState(Mydata)

    let Removebutton = (no1) => {
        const Newlist = list.filter((showData) => {
            return showData.no1 !== no1;
        })

        setlist(Newlist)
    }
    return (
        <>

            {list.map((showData) => {
                return (
                    <>

                        <h1 key={showData.no1}>NUMBer={showData.no} number2={showData.no1}</h1>
                        <button onClick={() => Removebutton(showData.no1)}>Removelist</button>
                    </>
                )

            })
            }
        </>
    )
}

export{Mylist}