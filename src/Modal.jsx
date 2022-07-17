import  ReactDom from "react-dom";

const MODAL_STYLES ={
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'center',
  fontSize: '2rem',
  position :'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#53F',
  padding:'50px',
  zIndex: 10,
  borderRadius:'1rem',
  color:'white',
  width:'50%',
  textAlign: 'center'

}

const OVERLAY_STYLES ={
  position: 'fixed',
  top:0,
  left:0,
  bottom:0,
  right:0,
  backgroundColor:'rgba(0,0,0,.7)',
  zIndex:10
}



const Modal = ({children, open, onClose}) => {
  if (!open) {
    return null
  }
  return ReactDom.createPortal (
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
      <button style={{backgroundColor:'lightblue', borderRadius:'1rem', border:'none', fontSize:'2rem', cursor:'pointer', marginBottom:'2rem', padding:'1rem'}} onClick={onClose}>Redeem your reward..</button>
      {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;