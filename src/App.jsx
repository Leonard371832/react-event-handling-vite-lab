
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

// This is the main App component that renders the password input and submit button.

function App() {
  return (
    <div className="App">
      <h1>Password Security</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;