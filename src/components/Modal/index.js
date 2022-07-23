// CSS
import "./modal.css";

// Icons 
import {ReactComponent as Close} from '../../assets/svgs/Close.svg'


const Modal = ({ setModalContent, children }) => {
  
  return(
    <div className="modal-backdrop flex-container flex-center">
      <div className="modal">
        <button className="toggle flex-container flex-center" onClick={() => {setModalContent(null)}} >
          <Close className="icon close-icon"/>
        </button>
        <p className="paragraph modal-message">
          {children}
        </p>
      </div>
    </div>
  )
}

export default Modal;

