
const SimpleForm = () => {
    const handleForm = e => {
        e.preventDefault()
        console.log(e.target);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" id="" />
                <br />
                <input type="password" name="pass" id="" />
                <br />
                <input type="text" name="number" id="" />
                {/* <input type="email" name="email" id="" /> */}
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;