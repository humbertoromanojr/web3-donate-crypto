import Web3 from "web3";

export async function doLogin() {
  if (!window.ethereum) throw new Error("Metamask not installed");

  const web3 = new Web3(window.ethereum);
  //requests the accounts you have in Metamask
  const accounts = await web3.eth.requestAccounts();

  if (!accounts || accounts.length === 0)
    throw new Error("Wallet not found or authorized");

  //Storing in the browser
  localStorage.setItem("wallet", accounts[0]);
}
