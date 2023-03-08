require("dotenv").config();
const express = require('express')
const Web3 = require('web3')

const constants = require('./constant')

const app = express()

// const PORT = 5000

app.listen(5001, () => {
    // console.log(`Server running on port ${PORT}`)
    console.log(`Server running on port 5001`)
})

app.get('/', (req, res) => {
    res.send("tug-be-update")
})

// init web3
const web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-testnet.onuschain.io'));

const ContractTugPair1 = new web3.eth.Contract(constants.TUGPAIR_ABI, constants.TUGPAIR_SC_1)
const ContractTugPair2 = new web3.eth.Contract(constants.TUGPAIR_ABI, constants.TUGPAIR_SC_2)

const main = async () => {
    const networkId = await web3.eth.net.getId()

    // -----------------------getEpochDuration ------------------------
    const resEpochDuration1 = await ContractTugPair1.methods.epochDuration().call()
    const resEpochDuration2 = await ContractTugPair2.methods.epochDuration().call()

    const getCurrentEpochTime1 = async () => {
        const currentTime = new Date()
        const resStartTime1 = await ContractTugPair1.methods.startTime().call()
        const resLastestEpoch1 = await ContractTugPair1.methods.getLatestEpoch().call()

        const currentEpochTime1 = Number(resStartTime1) + (Number(resLastestEpoch1) * Number(resEpochDuration1))
        
        if (currentEpochTime1 < currentTime.getTime() / 1000) {
            const resEpochData1 = await ContractTugPair1.methods.epochData(resLastestEpoch1).call()
            
            if (resEpochData1.token0SharesIssued > 0 || resEpochData1.token1SharesIssued > 0) {
                try {
                    const tx = ContractTugPair1.methods.updateEpoch()
                    const gas = await tx.estimateGas({ from: constants.FROM_ADDRESS })
                    const gasPrice = await web3.eth.getGasPrice()
                    const data = tx.encodeABI()
                    const nonce = await web3.eth.getTransactionCount(constants.FROM_ADDRESS)
            
                    
                    const signedTx = await web3.eth.accounts.signTransaction({
                        to: constants.TUGPAIR_SC_1,
                        data,
                        gas,
                        gasPrice,
                        nonce,
                        chainId: networkId,
                    },
                    '8102957e1c2858fe3661ae1d0b1eaecc2b3f85885613eb99d6dd175998806afc',
                    )
                    
                    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                    
                } catch (error) {
                    console.log('========1', error);
                }
            }
        }
    }

    const getCurrentEpochTime2 = async () => {
        const currentTime = new Date()
        const resStartTime2 = await ContractTugPair2.methods.startTime().call()
        const resLastestEpoch2 = await ContractTugPair2.methods.getLatestEpoch().call()

        const currentEpochTime2 = Number(resStartTime2) + (Number(resLastestEpoch2) * Number(resEpochDuration2))
       
        if (currentEpochTime2 < currentTime.getTime() / 1000) {
            const resEpochData2 = await ContractTugPair2.methods.epochData(resLastestEpoch2).call()
    
            if (resEpochData2.token0SharesIssued > 0 || resEpochData2.token1SharesIssued > 0) {
                try {
                    const tx = ContractTugPair2.methods.updateEpoch()
                    const gas = await tx.estimateGas({ from: constants.FROM_ADDRESS })
                    const gasPrice = await web3.eth.getGasPrice()
                    const data = tx.encodeABI()
                    const nonce = await web3.eth.getTransactionCount(constants.FROM_ADDRESS)
            
                    
                    const signedTx = await web3.eth.accounts.signTransaction({
                        to: constants.TUGPAIR_SC_2,
                        data,
                        gas,
                        gasPrice,
                        nonce,
                        chainId: networkId,
                    },
                    '8102957e1c2858fe3661ae1d0b1eaecc2b3f85885613eb99d6dd175998806afc',
                    )
                    
                    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                    
                } catch (error) {
                    console.log('========2', error);
                }
            }
        }
    }

    setInterval(getCurrentEpochTime1, Number(resEpochDuration1) * 1000);
    setInterval(getCurrentEpochTime2, Number(resEpochDuration2) * 1000);
}

main()