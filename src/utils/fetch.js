// Used to fetch data from ipfs
export const fetchData = async (url, controller) => {

  try{
    // Init object 
    const init = {
      signal: controller.signel,
      headers: {
        'Authorization': `Basic ${btoa(process.env.REACT_APP_INFURA_ID, ':', process.env.REACT_APP_INFURA_SECRET)}`,
      } 
    }
    
    // Fetch api used fetch data from url
    const response = await fetch(url, init);
    
    // If response failed throw error
    if(!response.ok && response.status >= 200 && response.status < 300){
      throw new Error(`Fetch request failed. Status is ${response.statusText}. Application Error. Please report this bug!`);
    }
    
    // Gets the response content type from headers 
    const contentType = response.headers.get('content-type');
    
    // If the response is json then parse it to javascript object using response.json()
    // Otherwise parse its to blob using response.blob()
    const data = response && contentType.includes('application/json') ? await response.json() : await response.blob()
    
    // Returns parsed data
    return data;

  }catch(e){  
    console.log(e.message);
  }
}

