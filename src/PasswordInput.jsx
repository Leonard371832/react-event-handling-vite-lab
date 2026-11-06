
// PasswordInput component that allows users to input their password and toggle visibility.

function PasswordInput() {

  // Runs whenever the user changes the password input
   function handleChange() {
      console.log("Entering password...");
   }

   return (
     <input 
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}         
     />
   );
}

export default PasswordInput;
