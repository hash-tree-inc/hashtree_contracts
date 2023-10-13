// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


struct AppStorage {
    string msg1;
    string msg2;
    mapping(address => User) users;
}

struct User {
    address _userAddr;
    string _nation;
    string _useWalletType;
    bool _isBlack;
}
