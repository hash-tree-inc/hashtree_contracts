// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {LibDiamond} from "../../libraries/LibDiamond.sol";
import "../../storage/facets/AppStorageFacet.sol";

contract VIVARIUM is AppStorageFacet {
    function _setAddress() external {
        AppStorage storage _s = appStorage();
        _s.users[msg.sender]._userAddr = msg.sender;
    }

    function _getAddress() external view returns (address, bool) {
        AppStorage storage _s = appStorage();
        return (_s.users[msg.sender]._userAddr, _s.users[msg.sender]._isBlack);
    }
}
