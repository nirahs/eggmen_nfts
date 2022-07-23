// React
import { useState } from 'react';

// CSS
import './faqs.css';

// Icons
import {ReactComponent as Show} from '../../assets/svgs/Show.svg';
import {ReactComponent as Close} from '../../assets/svgs/Close.svg';


const FAQs = ({faqs}) => {
  if(Boolean(faqs) && faqs.length > 0) {
    return (
      <section className="faq container" id="faqs">
        <div className="heading-wrapper flex-container flex-column ">
          <h2 className="heading heading-border">FAQs</h2>
        </div>
        
        <div className="faqs-container sub-container">
          {
            faqs.map((faq, index) => {
              return (
                <FAQ faq={faq} key={index}/>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default FAQs;


const FAQ = ({faq}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`faq-wrapper ${show ? 'active' : ''}`}>
      <h2 className="heading question">{faq.question}</h2>
      <p className="paragraph answer">{faq.answer}</p>
      <button className="toggle flex-container flex-center" onClick={() => {setShow(prevShow => !prevShow)}}>
        <Show className="icon toggle-icon show"/>
        <Close className="icon toggle-icon close"/>
      </button>
    </div>
  )
}