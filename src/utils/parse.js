import { ethers } from 'ethers';

export const bigNumbersToNumbers = (bigNumbers) => {
  if(bigNumbers) {
    return bigNumbers.map((tokenId) => {
      return ethers.BigNumber.from(tokenId).toNumber();
    })
  }else {
    console.log(`BigNumber to Number parsing failed. Application Error. Please report this bug!`)
  }
}
