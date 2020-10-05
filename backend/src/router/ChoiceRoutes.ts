import express, { response } from "express"
import Web3 from 'web3'
import { UserModel } from "../model/UserModel"

// contract주소
const address = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const ChoiceRoutes = express.Router()
// contract_select


const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_selectPerson",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_selectedPerson",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "article",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_selectedArticle",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_point",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "RewardLogic",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]



//통역 선택 로직
ChoiceRoutes.post("/traincoin", async (req: express.Request, res: express.Response) => {
	let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	// <선택하는 사람의 계좌:string>  <계좌의 비번:string>
    web3.eth.personal.unlockAccount("ddd", "test", 600)
    .then(() => console.log('Account unlocked!'));
    let selectTokenAbi:any = ABI;
    let TokenContract = new web3.eth.Contract(selectTokenAbi,address);

    // then이하는 그냥 확인용임
    // cotnract에 관한 해당 컨트랙트 내용을 확인하기 위해서는 backend/contract/Select 보면 됨
    // 계좌만 string이고 그 이외에 parameter는 int
    TokenContract.methods.RewardLogic("<통역해준사람의 계좌>","<게시물 id>", "<선택한 통역 id>","<포인트>","<평점>").send({from: "<선택하는 사람의 계좌:string>"})
    .on('transactionHash', function(hash:any){
        console.log('해쉬야');
        console.log(hash);
    })
    .on('receipt', function(receipt:any){
        console.log('레시피야');
        console.log(receipt);
    })
    .on('confirmation', function(confirmationNumber:any, receipt:any){
        console.log('컴필이야');
        console.log(confirmationNumber);
    })
    .on('error', function(error:any, receipt:any) {
        console.log('에러야');
        console.log(error);
    });
})
//계좌생성
ChoiceRoutes.post("/newBalance",async (req: express.Request, res: express.Response) => {
	let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
  // const data = req
  let wallet_address : String = ""
	console.log(req.body)
  web3.eth.personal.newAccount(req.body['wallet_password'])
  .then(response => {
    console.log(response)
    wallet_address = response
    res.status(200).send(wallet_address)
  });
})

// 계좌확인
ChoiceRoutes.post("/getBalance",async (req: express.Request, res: express.Response) => {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    console.log('getBalance')
    console.log(req.body)
    let my_money : String = ""
    web3.eth.getBalance(req.body['address'])
    .then( response => {
      console.log(typeof(Number(response)))
      // 0.024 이더 -> 1알
      my_money = String((Number(response) / 10**18) * 41.7) 
      res.status(200).send(my_money)
    });
})

// 상대방 계좌 저장 
ChoiceRoutes.post("/userAccount", async (req: express.Request, res: express.Response) => {
  const user_id = req.body["user_id"]
  console.log(user_id)
	await UserModel.findOne({ _id: user_id })
    .exec((err: Error, user:any) => {
      console.log(err,"에러")
      console.log(user.user_wallet,"지갑")
      if(err){
        res.status(500).send(err)
      }else{
        res.status(200).send(user.user_wallet)
      }
    })
})

// 계좌송금
ChoiceRoutes.post("/transcoin",async (req: express.Request, res: express.Response) => {
  let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  console.log('send money....')
  console.log(req.body)
  let fromEgg : string = req.body['fromEgg']
  let toEgg : string = req.body['toEgg']
  let PassWord : string = req.body['Password']
  let Egg : number = req.body['Egg']
  
  await web3.eth.personal.unlockAccount(fromEgg, PassWord, 600).then(() => console.log('Account unlocked!1'));
  await web3.eth.personal.unlockAccount(fromEgg, PassWord, 600).then(() => console.log('Account unlocked!2'));
    //계좌가 unlock됫다면 이제 돈보내면된다
  await web3.eth.sendTransaction({
      from: fromEgg, // 출금 계좌(통역 의뢰인)
      to: toEgg, // 입금 계좌 (통역가)
      value: (Egg / 41.7)*(10**18) // 통역 대가
  })
  .then(res => {
    console.log('success')
    console.log(res)
  })
  .catch(err => {
    console.log('fail')
    console.log(err)
    res.status(403).send({ message: "돈이 없어용" })
  });   
})


export { ChoiceRoutes }