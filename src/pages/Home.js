import React,{useState,useEffect} from 'react';
import Game from './Game.png';
import like from './like.png';
import comment from './comment.png'
import Web3JS from './Web3JS'
import buy from './buy.png'
import logo from './logo.png'
import swipe from './swipe.png'
import { Link } from "react-router-dom";
import "./Home.css";
import { useMoralis,account,isAuthenticated,useWeb3ExecuteFunction} from "react-moralis";
import { ConnectButton,TextArea,Button,Input,Card, Illustration} from "web3uikit";
import { contractABI, contractAddress } from "./Contract";
import Web3 from "web3";
const Home = () => {
  const [showNftMinter,setShowNftMinter]=useState(false)
  const { isAuthenticated, Moralis,account } = useMoralis();
  const [theFile,setTheFile]=useState()
  const [selectedFile,setSelectedFile]=useState()
  const [counter,setCounter]=useState(0)
  const [finalDisplay,setFinalDisplay]=useState(false)
  const [img,setImg]=useState()
  const [tweet,setTweet]=useState()
  const contractProcessor = useWeb3ExecuteFunction();
  const [displayTweet,setDisplayTweet]=useState({})
  const [showImg,setShowImg]=useState(true)
  const changeHandler = (event) => {
    
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };
  const tweety=(e)=>{
    setTweet(e.target.value)
  }
  const saveCount = async () => {
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    const arr=myDetails.attributes.count;
    myDetails.set("count", arr+1);

}

const getCount=async ()=>{
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    const arr=myDetails.attributes.count;
    setCounter(arr)
    console.log(arr);
}
const dummydb=[{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094634.png?alt=media&token=58daec00-b245-4607-bb60-c680ccfadec5"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094617.png?alt=media&token=9bf67064-21ba-4965-8e45-62bb840174f5"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094700.png?alt=media&token=32c7877e-4d51-46d0-9507-9d1b89599cf3"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094728.png?alt=media&token=6128082a-2e3e-463a-b23d-c273c08bb08f"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094751.png?alt=media&token=72e2ca73-cbbd-47f3-953e-498634eaba09"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094818.png?alt=media&token=4bc0928e-b249-4aa1-bdba-285bf26f6ee6"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094802.png?alt=media&token=ca8da6f3-65f8-493a-bef7-1d201f721c4f"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094851.png?alt=media&token=d6b7cc11-a54c-41ab-837a-58779c9ef660"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094915.png?alt=media&token=8d0aa0ce-957e-428f-bd5d-966cec24abf1"
},
{

  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
  account:'Richard Isu',
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
  
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
},
{
 
  link:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab975.appspot.com/o/Screenshot_20221107-094554.png?alt=media&token=fb27035a-e16e-4166-be3f-57cd8ff42113"
}

]
  const nft=()=>{
    setShowNftMinter(true);
  }
  async function maticTweet() {

   
    let img;
    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      img = file.ipfs();
    }else{
      img = "No Img"
    }

    let options = {
      contractAddress: "0x183013999babc7295a4d6965678c08a92a9a68e9",
      functionName: "addTweet",
      abi: [{
        "inputs": [
          {
            "internalType": "string",
            "name": "tweetTxt",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tweetImg",
            "type": "string"
          }
        ],
        "name": "addTweet",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }],
      params: {
        tweetTxt: tweet,
        tweetImg: img,
      },
      
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        saveCount()
       alert('Saved on Polygon TestNet')
       setShowImg(false)
      },
      onError: (error) => {
        console.log(error.data.message)
      }
    });

  }
 
  async function maticTweety() {
    
   

      let options1 = {
        contractAddress: "0x183013999babc7295a4d6965678c08a92a9a68e9",
        functionName: "getTweet",
        abi: [{
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getTweet",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }],
        params: {
         id:counter
        },
        
      }
  
      await contractProcessor.fetch({
        params: options1,
        onSuccess: (result) => {
          let rv = {};
            rv.message = result[0];
            rv.image = result[1];
            rv.counter =parseInt(result[2]['_hex'],10)
            rv.account = result[3];
        
          let q1=result[2]['_hex']
          
          // console.log('number is'+parseInt(q1,10))
         
          setDisplayTweet(rv)
         setCounter(counter+1)
          
        
  
        
        
        },
        onError: (error) => {
          console.log(error.data.message)
        }
        
      });
  
    
    
  }

return(
  <>
  <div className="container">
   
   
  {isAuthenticated ?

  <div class="incontainer" >
    <div  class="nav" style={{'border-radius':'1em'}}>
    <Button
 onClick={maticTweety}
  text="Explore"
  theme="outline"
/>
  
  <ConnectButton/>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div style={{'height':'2em'}}>
  <Input
  label="Write Post ✍️"
  onChange={tweety}
  
/>

</div>
<br></br>

    <input  type="file" onChange={changeHandler}></input>
    
  {selectedFile ?<div>
    {showImg &&  <img style={{'width':'17em','height':'15em'}} src={selectedFile}/>}
   
  </div>:<div></div>}
  <br></br>

 <div class="post">
 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 {!showNftMinter && <Button
 onClick={maticTweet}
  text="Post on Polygon"
  theme="outline"
/>}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{!showNftMinter && 
<div style={{'height':'1em'}}>
<Button
onClick={nft}
  text="Mint  NFT"
  theme="outline"
/>
</div>


}

{showNftMinter && <Web3JS theFile={theFile} selectedFile={selectedFile}/>}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br/>


</div>
<br></br>

     
  
    <br></br>
    <br></br>
    {displayTweet && displayTweet.account!=undefined ?
    <div>
  
      {dummydb.map((e)=>{
        return(
            <div>
              <Card
    
    onClick={maticTweety}
    
  >
    <div>
  
    <img style={{'width':'15em','padding-left':'0em','height':'17em'}}src={e.link}/>
    
  <br></br>
   <img style={{'width':'2em','padding-left':'1.8em'}} src={like}/>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <img style={{'width':'2em'}} src={comment}/>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <a href="https://opensea.io/account">
   <img style={{'width':'2em'}} src={buy}/>
   </a>
   &nbsp;
    </div> 
    
  </Card>
<br></br><br></br>
            </div>
            
        )
       
      })}

    
  
</div>
    :<div></div>}
    
    <br></br>
    <br></br>
  </div>:<div><div style={{'margin-left':'20em'}}>
  <img style={{'width':'30em'}} src={logo}/>
  <div style={{'margin-left':'10em'}}>
  <ConnectButton />
  </div>
  </div></div>

    
  }
  
  </div>
  </>
)
}

export default Home;
