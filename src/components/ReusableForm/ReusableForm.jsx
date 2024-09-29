
const ReusableForm = ({ formTitle, handleSubmit, btnText = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)

    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="name" placeholder="name" />
                <br />
                <input type="password" name="password" id="password" placeholder="password" />
                <br />
                <input type="email" name="email" id="email" placeholder="email" />
                <br />
                <input type="submit" value={btnText} id="submit" />
            </form>
        </div>
    );
};

export default ReusableForm;