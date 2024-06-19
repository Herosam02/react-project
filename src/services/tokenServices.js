// src/services/tokenService.js
import web3 from './web3';
import SocialMediaToken from '../socialMediaToken.sol';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(SocialMediaToken.abi, contractAddress);

export const awardTokens = async (recipient, amount) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.awardTokens(recipient, amount).send({ from: accounts[0] });
};
