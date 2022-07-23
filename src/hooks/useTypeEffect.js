import {useEffect} from 'react';
import Typed from 'typed.js';

const useTypeEffect = (options, typeEffectElement) => {
  useEffect(() => {
    let typed = new Typed(typeEffectElement.current, options);
    
    return () => {
      typed.destroy();
    }
  }, [])
}

export default useTypeEffect;