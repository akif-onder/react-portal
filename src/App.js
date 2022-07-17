
import React, { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES ={
  display:'flex',
  justifyContent:'center',
  margin:'3rem',
  position: 'relative',
  zIndex: 1,
  
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div style={BUTTON_WRAPPER_STYLES}>
      <button style={{backgroundColor:'pink', borderRadius:'1rem', fontSize: '3rem', cursor:'pointer',padding:'1rem'}} onClick={()=>setIsOpen(true)}>Click Here</button>

      <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
        Congratulations... 
      </Modal>
    </div>
    {/* <div style={OTHER_CONTENT_STYLES}>Other Content</div> */}
    </>
  );
}

export default App;
