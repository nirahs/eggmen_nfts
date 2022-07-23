// CSS
import './loading.css';

const Loading = ({ inline }) => {
  return (
    <div className={`flex-container flex-center ${inline ? "loading-inline" : "loading-block"}`}>
      <div className="loading"></div>
    </div>
  );  
}

export default Loading;