// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct AppStorage {
    mapping(address => User) users;
}

struct User {
    address _userAddr;
    string _nation;
    string _useWalletType;
    bool _isBlack;
}

struct ContractAddr {
    address _contractAddress;
}

// 유저의 비콘 컨트랙트 관리 현황
struct UserContract {
    address _userAddr;
    address _contractAddr;
    uint _version;
    // 20, 721, 1155
    uint _type;
    // 0: 미사용, 1: 사용
    uint _status;
}
