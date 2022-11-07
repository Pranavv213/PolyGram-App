import React, { useState } from "react";
// import { useLocation } from 'react-router';
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { contractABI, contractAddress } from "./Contract";
import Web3 from "web3";
import './Web3JS.css'
import { ConnectButton,TextArea,Input} from "web3uikit";
const web3 = new Web3(Web3.givenProvider);
function Web3JS({theFile,selectedFile}) {
  
  const { isAuthenticated, logout, user } = useMoralis();

  const doLogout = () => {
    if (isAuthenticated) {
      logout();
      window.location.reload();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to save image to IPFS
      const file1 = new Moralis.File(theFile.name, theFile);
      await file1.saveIPFS();
      const file1url = file1.ipfs();
      // Generate metadata and save to IPFS
      const metadata = {
        name,
        description,
        image: file1url,
      };
      const file2 = new Moralis.File(`${name}metadata.json`, {
        base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
      });
      await file2.saveIPFS();
      const metadataurl = file2.ipfs();
      // Interact with smart contract
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const response = await contract.methods
        .mint(metadataurl)
        .send({ from: user.get("ethAddress") });
      // Get token id
      const tokenId = response.events.Transfer.returnValues.tokenId;
      // Display alert
      alert(
        `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
      );
    } catch (err) {
      console.error(err);
      alert("An error occured!");
    }
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="App">
      <div>
        
      </div>
      {isAuthenticated && (
        <div className="content">
          <form onSubmit={onSubmit}>
            <div style={{'color': 'white'}}>
            <Input 
               placeholder="Enter the name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               
              />
              
            </div>
            <br></br>
            <div className="mt-3">
            <Input 
              
               value={description}
               placeholder="Description"
               onChange={(e) => setDescription(e.target.value)}
               
              />
              
              
            </div>
            <div className="mt-3">
             
            </div>
            <br></br>
            <button  class="button-82-pushable" type="submit" role="button">
            
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
   Mint
  </span>
</button>
           
          </form>
        </div>
      )}
    </div>
  );
}

export default Web3JS;