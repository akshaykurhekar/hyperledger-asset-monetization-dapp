/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    //1 init Ledger
    //2 writeData
    //3 ReadData

    async initLedger(ctx) {
        await ctx.stub.putState("genisis", "InitLeadger");
        return "success"
    }

    async writeData(ctx, key, value) {
        await ctx.stub.putState(key, value);
        return value;
    }

    async writeJsonData(ctx, key, value) {
        let jsonvalue = JSON.parse(value);
        console.log("*******************", jsonvalue)
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(jsonvalue)));
        return Buffer.from(JSON.stringify(jsonvalue));
    }

    async readData(ctx, key) {
        var result = await ctx.stub.getState(key); // it will return byte array
        result = result.toString('utf-8');
        return JSON.stringify(result);
    }

    async queryData(ctx, queryString) {
        // let queryString = {};
        // queryString.selector = {
        //     "age": age
        // }

        // let iterator = await ctx.stub.getQueryResult(JSON.stringify(queryString));
        let iterator = await ctx.stub.getQueryResult(queryString);
        let result = await this.getIteratorData(iterator);
        return JSON.stringify(result);
    }

    async getIteratorData(iterator) {
        let resultArray = [];

        while (true) {
            let res = await iterator.next();
            let resJson = {}
                // res.value.key
                // res.value.value
            if (res.value && res.value.value) {
                resJson.key = res.value.key;
                resJson.value = JSON.stringify(res.value.value.toString('utf-8'));
                resultArray.push(resJson);
            }

            if (res.done) {
                await iterator.close(); // always need to close iterator in loopng

                return resultArray;
            }
        }
    }
}

module.exports = FabCar;