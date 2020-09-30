import express from "express"
import Web3 from 'web3';

// contract주소
const address = '0x9a0Dfa88c2F5dc17c07Dc40d2bA7be68357938EF';
const ChoiceRoutes = express.Router()
// contract_select
const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_selectedPerson",
				"type": "address"
			},
			{
				"name": "article",
				"type": "uint256"
			},
			{
				"name": "_selectedArticle",
				"type": "uint256"
			},
			{
				"name": "_point",
				"type": "uint256"
			},
			{
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "RewardLogic",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
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
	const data = req.params
	console.log(data)
    // web3.eth.personal.newAccount("test1234")
    // .then(console.log);
})

// 계좌확인
ChoiceRoutes.get("/getBalance",async (req: express.Request, res: express.Response) => {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
    web3.eth.getAccounts()
    .then(console.log);
})

export { ChoiceRoutes }