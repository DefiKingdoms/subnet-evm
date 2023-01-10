// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

interface ICapIncreaser {
    // run the cap upgrade one time.
    function upgradeCap() external;
}