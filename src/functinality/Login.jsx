import React, {useRef, useState } from 'react'

function Loginpage() {
    const Myloginpage = useRef(null)
    const Password=useRef(null)
    const [passwordfield, setpasswordfield] = useState(false)
    const [login, setlogin] = useState(false)
    



    const Submit = (e) => {
        e.preventDefault();
        const name = Myloginpage.current.value;
        name === "" ? alert("please valid username and password") : setlogin(true);

        const pass = Password.current.value;
        pass === "" ? alert("please valid username and password") : setpasswordfield(true);
    }
   
    return (
        <>
            <form onSubmit={Submit}>
                <label htmlFor='hook'>Username:</label>
                <input type="text" id='hook' ref={Myloginpage} />
                <br/>
                <label htmlFor='hook2' >Password:</label>
                <input type="password" id='hook2' ref={Password}/>
                <div className='submit'>
                    <input type="submit" value="submit"/>
                </div>
                <h1>{login ? `your user id is ${Myloginpage.current.value}`:""}</h1>
                <h2>{passwordfield ? `Your password is ${Password.current.value}`: ""}</h2>
            </form>
        </>
    )
}

export { Loginpage }