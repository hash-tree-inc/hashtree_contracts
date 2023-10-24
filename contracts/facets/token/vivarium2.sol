// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {LibDiamond} from "../../libraries/LibDiamond.sol";
import "../../storage/facets/AppStorageFacet.sol";

contract VIVARIUM2 is AppStorageFacet {
    function getString() external view returns (string memory) {
        AppStorage storage _s = appStorage();
        return 'vivarium2' ;
    }

    
}
