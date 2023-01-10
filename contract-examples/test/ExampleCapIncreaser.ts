// (c) 2019-2022, Ava Labs, Inc. All rights reserved.
// See the file LICENSE for licensing terms.

import { expect } from "chai"
import { ethers } from "hardhat"
import { Contract, ContractFactory } from "ethers"

describe("ExampleCapIncreaser", function () {
    let capIncreaserContract: Contract

    before(async function () {
        // Deploy Hello World Contract
        const ContractF: ContractFactory = await ethers.getContractFactory(
            "ExampleCapIncreaser"
        )

        capIncreaserContract = await ContractF.deploy()
        // Sleep for 5 seconds to allow the contract to be mined
        //await new Promise((resolve) => setTimeout(resolve, 5000))
        await capIncreaserContract.deployTransaction.wait(1)
        console.log(`Contract deployed to: ${capIncreaserContract.address}`)

        console.log("Using hardcoded contract address: 0x52C84043CD9c865236f11d9Fc9F56aa003c1f922")
        capIncreaserContract = ContractF.attach("0x52C84043CD9c865236f11d9Fc9F56aa003c1f922")
    })

    it("initial cap should be 125 million", async function () {
        let cap = await capIncreaserContract.cap()
        expect(cap).to.equal(ethers.utils.parseEther("125000000"))
    })

    it("should update cap to 250 million", async function () {
        let tx = await capIncreaserContract.upgradeCap()
        await tx.wait()

        expect(await capIncreaserContract.cap()).to.be.equal(
            ethers.BigNumber.from(ethers.utils.parseEther("250000000"))
        )
    })
})