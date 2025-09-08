// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


struct Campaign {
    address author;
    string title;
    string description;
    string videoUrl;
    string imageUrl;
    uint256 balance;
    bool active;
}


contract DonateCrypto {
    //wei
    uint256 public fee = 100;

    uint256 public nextId = 0;

    // id = campaign
    mapping(uint256 => Campaign) public campaigns;

    function addCampaign(string calldata title, string calldata description, string calldata videoUrl, string calldata imageUrl) public {
        Campaign memory newCampaign;
       
        newCampaign.title = title;
        newCampaign.description = description;
        newCampaign.videoUrl = videoUrl;
        newCampaign.imageUrl = imageUrl;
        newCampaign.balance = 0;
        newCampaign.active = true;
        newCampaign.author = msg.sender;

        nextId++;
        campaigns[nextId] = newCampaign;
    }

    function donate(uint256 id) public payable {
        require(msg.value > 0, "You must send a donation value more than zero (0)");
        require(campaigns[id].active == true, "Cannot donate to this Campaign");

        campaigns[id].balance += msg.value;
    }

    function withdraw(uint256 id) public {
        // temporary variable
        Campaign memory campaign = campaigns[id];
        require(campaign.author == msg.sender, "You do not the have permission");
        require(campaign.active == true, "This Campaign is closed");
        require(campaign.balance > fee, "This Campaign does not have enough balance");

        address payable recipient = payable(campaign.author);
        recipient.call{value: campaign.balance - fee}("");

        campaigns[id].active = false;

    }

}