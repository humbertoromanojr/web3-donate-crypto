import Web3 from "web3";

import ABI from "./ABI.json";

const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";

export async function doLogin() {
  if (!window.ethereum) throw new Error("Metamask not installed");

  const web3 = new Web3(window.ethereum);
  //requests the accounts you have in Metamask
  const accounts = await web3.eth.requestAccounts();

  if (!accounts || accounts.length === 0)
    throw new Error("Wallet not found or authorized");

  //Storing in the browser
  localStorage.setItem("wallet", accounts[0]);

  return accounts[0];
}

function getContract() {
  const web3 = new Web3(window.ethereum);
  if (!web3) throw new Error("Metamask not installed");

  const from = localStorage.getItem("wallet");
  return new web3.eth.Contract(ABI, contractAddress, { from });
}

export async function addCampaign(campaign) {
  const contract = getContract();
  return contract.methods
    .addCampaign(
      campaign.title,
      campaign.description,
      campaign.imageUrl,
      campaign.videoUrl
    )
    .send();
}

export async function getLastCampaignId() {
  const contract = getContract();
  return contract.methods.nextId().call();
}

export async function getCampaign(id) {
  const contract = getContract();
  return contract.methods.campaigns(id).call();
}

export async function donate(id, donation) {
  await doLogin();
  const contract = getContract();
  return contract.methods.donate(id).send({ value: donation });
}
