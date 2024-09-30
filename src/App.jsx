
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log("Sign up data", data);
  }
  const handleUpdateSubmit = data => {
    console.log("Update data", data);
  }

  return (
    <>
      <Grandpa></Grandpa>
      {/* <HookForm /> */}
      {/* <RefForm /> */}
      {/* <StatefulForm /> */}
      {/* <SimpleForm /> */}
      {/* <ReusableForm
        formTitle="Sign Up"
        handleSubmit={handleSignUpSubmit}
        btnText="Submit">
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle="Update Profile"
        handleSubmit={handleUpdateSubmit}
        btnText="Update" >
        <div>
          <h2>Update</h2>
          <p>Please Update your profile to stay update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
