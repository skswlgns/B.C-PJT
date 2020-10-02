import Web3 from 'web3';

const address = '0x9a0Dfa88c2F5dc17c07Dc40d2bA7be68357938EF';
const address2 = '0x9a0a180fdae0432eAd120d73Af88D7f4c1339429';

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

const ABI2 = [
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
				"name": "_point",
				"type": "uint256"
			}
		],
		"name": "isComplete",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_placement",
				"type": "string"
			},
			{
				"name": "_fromLang",
				"type": "string"
			},
			{
				"name": "_toLang",
				"type": "string"
			},
			{
				"name": "_point",
				"type": "uint256"
			},
			{
				"name": "_client",
				"type": "uint256"
			},
			{
				"name": "_clientAddress",
				"type": "address"
			},
			{
				"name": "_translator",
				"type": "uint256"
			}
		],
		"name": "RecordingContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
]



function SelectContract()  {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    web3.eth.personal.unlockAccount("0x32fac76636cb9aa6f889d944b7b008fa6aa53224", "test1234", 600)
    .then(console.log('Account unlocked!'));
    let selectTokenAbi = ABI;
    let TokenContract = new web3.eth.Contract(selectTokenAbi,address);


    TokenContract.methods.RewardLogic("0x93580c4295361b569e4f9901c9dca9b2705151be",1,2,120,5).send({from: "0x32fac76636cb9aa6f889d944b7b008fa6aa53224"})
    .on('transactionHash', function(hash){
        console.log('해쉬야');
        console.log(hash);
    })
    .on('receipt', function(receipt){
        console.log('레시피야');
        console.log(receipt);
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log('컴필이야');
        // console.log(confirmationNumber);
    })
    .on('error', function(error, receipt) {
        console.log('에러야');
        console.log(error);
    });
    
}
//블록 수 확인
function fetchLatestBlock() {
    // geth 서버로 접속하고 
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // 트랜잭션으로 인해서 생성된 블록 개수 확인
    web3.eth.getBlockNumber().then(console.log);
}
// fetchLatestBlock()  


// web에서 계좌끼리 송금하기
function trasferWeb() {
    // 서버에 접속하고
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
    // 계좌의 unlock하여 송금할 수 있도록한다
    // 이 때 parameter 값은 계좌주소, 비번, ?(아마 횟수나 시간일듯 => 안넣으면 그때마다 풀어줘야함)
    web3.eth.personal.unlockAccount("0x32fac76636cb9aa6f889d944b7b008fa6aa53224", "test1234", 600)
    .then(console.log('Account unlocked!'));
    
    //계좌가 unlock됫다면 이제 돈보내면된다
    web3.eth.sendTransaction({
        from: "0x32fac76636cb9aa6f889d944b7b008fa6aa53224", // 출금 계좌(통역 의뢰인)
        to: "0x93580c4295361b569e4f9901c9dca9b2705151be", // 입금 계좌 (통역가)
        value: '1000000000000000' // 통역 대가
    })
    .then(function(receipt){
        console.log(receipt);
    });  
}

//계좌생성
function newBalance(password) {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
    web3.eth.personal.newAccount(password)
    .then(console.log);
}


//계좌잔액 조회
function getBalanceinfo(address) {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 
    web3.eth.getBalance(address)
    .then(console.log);
}


function TransContract()  {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // web3.eth.personal.unlockAccount("0x5ec940f76caaccd269d07bd78c0e00c1638eba8c", "test1234", 600)
    // .then(console.log('Account unlocked!'));
    let selectTokenAbi = ABI2;
    let TokenContract = new web3.eth.Contract(selectTokenAbi,address2);

    console.log(TokenContract.methods)

    TokenContract.methods.RecordingContract("seoul","kor","eng",120,5, "0x32fac76636cb9aa6f889d944b7b008fa6aa53224",2)
    .send({from: "0xd8d332e8fa9a60dfb6bac79419c700ce8785ffd3"})
    .on('transactionHash', function(hash){
        console.log('해쉬야');
        console.log(hash);
    })
    .on('receipt', function(receipt){
        console.log('레시피야');
        console.log(receipt);
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log('컴필이야');
        console.log(confirmationNumber);
    })
    .on('error', function(error, receipt) {
        console.log('에러야');
        console.log(error);
    });
    
}

// getBalanceinfo("0x5ec940f76caaccd269d07bd78c0e00c1638eba8c")

function TransSend() {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    web3.eth.personal.unlockAccount("0x5ec940f76caaccd269d07bd78c0e00c1638eba8c", "test1234", 600)
    .then(console.log('Account unlocked!'));
    let selectTokenAbi = ABI2;
    let TokenContract = new web3.eth.Contract(selectTokenAbi,address2);

    console.log(TokenContract.methods)
    // TokenContract.methods.isComplete("0xE2948646316B000CfCB2C1433cfB7928Cf2bc029", 120)
    // .send({from: '0x5ec940f76caaccd269d07bd78c0e00c1638eba8c'})
    // .on('transactionHash', function(hash){
    //     console.log('해쉬야');
    //     console.log(hash);
    // })
    // .on('receipt', function(receipt){
    //     console.log('레시피야');
    //     console.log(receipt);
    // })
    // .on('confirmation', function(confirmationNumber, receipt){
    //     console.log('컴필이야');
    //     console.log(confirmationNumber);
    // })
    // .on('error', function(error, receipt) {
    //     console.log('에러야');
    //     console.log(error);
    // });
}


function unlock() {
	let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    web3.eth.personal.unlockAccount("0x32fac76636cb9aa6f889d944b7b008fa6aa53224", "test1234", 600)
    .then(console.log('Account unlocked!'));
}

function getBal() {
	// geth 서버로 접속하고 
	let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	// 트랜잭션으로 인해서 생성된 블록 개수 확인
	web3.eth.getAccounts()
	.then(console.log);
}

getBal()
// getBalanceinfo("0x32fac76636cb9aa6f889d944b7b008fa6aa53224")
// getBalanceinfo("0xd8d332e8fa9a60dfb6bac79419c700ce8785ffd3")