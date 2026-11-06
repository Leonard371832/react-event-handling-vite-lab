

function SubmitButton() {

    // Runs when the mouse enters the button
      function handleMouseEnter() {
         console.log("Mouse entered.");
      }
 

      // Runs when the mouse leaves the button
      function handleMouseLeave() {
         console.log("Mouse left.");
      }

    return (
      <button 
         onMouseEnter={handleMouseEnter} 
         onMouseLeave={handleMouseLeave}
      >
         Submit
      </button>
    );
}

export default SubmitButton;
