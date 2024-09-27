import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus()
    }, [])



    const handleForm = e => {
        e.preventDefault();
        console.log(nameRef.current.value, passwordRef.current.value);
    }
    return (
        <form onSubmit={handleForm}>
            <input ref={nameRef} type="text" name="name" id="" />
            <br />
            <input ref={passwordRef} type="password" name="pass" id="" />
            <br />
            <input type="text" name="number" id="" />
            {/* <input type="email" name="email" id="" /> */}
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default RefForm;