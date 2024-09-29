import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const { value, onChange } = useInputState();

    const handleForm = e => {
        e.preventDefault();
        console.log("form data", value);
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <input onChange={onChange} type="text" name="name" id="" />
                <br />
                <input onChange={onChange} type="password" name="pass" id="" />
                <br />
                <input type="text" name="number" id="" />
                {/* <input type="email" name="email" id="" /> */}
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;