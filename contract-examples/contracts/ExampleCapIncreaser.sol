//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ICapIncreaser.sol";

// ExampleCapIncreaser shows how the CapIncreaser precompile can be used in a smart contract.
contract ExampleCapIncreaser {
    address constant CAP_INCREASER_ADDRESS = 0x0300000000000000000000000000000000000000;
    ICapIncreaser capIncreaser = ICapIncreaser(CAP_INCREASER_ADDRESS);

    // Make a 5 gap variable.
    uint256[6] private ______gap;

    // Cap is now at slot 7 hopefully.
    uint256 public cap = 125000000 ether; // We initialize the cap to 125 million ether.
}