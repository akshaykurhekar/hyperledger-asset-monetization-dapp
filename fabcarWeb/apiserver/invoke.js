/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcarWeb');

        // Submit the specified transaction.
        // writeData is chaincode method which need to call with its passing paramenter

        // let key1 = 'p1';
        // const jsonObj1 = {
        //     'name': 'akshay',
        //     'branch': 'Blockchain',
        //     'age': '23',
        //     'idx': '123dfsfx034'
        // }

        // let key2 = 'p2';
        // const jsonObj2 = {
        //     'name': 'anuj',
        //     'branch': 'Blockchain',
        //     'age': '24',
        //     'idx': '124dfsfx034'
        // }

        // let key3 = 'p3';
        // const jsonObj3 = {
        //     'name': 'khushbu',
        //     'branch': 'Salesforce',
        //     'age': '23',
        //     'idx': '12edfsfx034'
        // }

        // let key4 = 'p4'
        // const jsonObj4 = {
        //     'name': 'supriya',
        //     'branch': 'Salesforce',
        //     'age': '24',
        //     'idx': '123edfsfx034'
        // }

        // await contract.submitTransaction('writeJsonData', key1, JSON.stringify(jsonObj1));
        // await contract.submitTransaction('writeJsonData', key2, JSON.stringify(jsonObj2));
        // await contract.submitTransaction('writeJsonData', key3, JSON.stringify(jsonObj3));
        // await contract.submitTransaction('writeJsonData', key4, JSON.stringify(jsonObj4));

        // Submit the specified transaction.
        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR12', 'Dave')
        await contract.submitTransaction('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom');
        console.log('Transaction has been submitted');



        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();