# MockERC721Facet









## Methods

### approve

```solidity
function approve(address operator_, uint256 tokenID_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator_ | address | undefined |
| tokenID_ | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address account_) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account_ | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### construct

```solidity
function construct() external nonpayable returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address operator)
```



*Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner_, address operator_) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner_ | address | undefined |
| operator_ | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### ownerOf

```solidity
function ownerOf(uint256 tokenID_) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenID_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from_, address to_, uint256 tokenID_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| tokenID_ | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from_, address to_, uint256 tokenID_, bytes data_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| tokenID_ | uint256 | undefined |
| data_ | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator_, bool approved_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator_ | address | undefined |
| approved_ | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenURI

```solidity
function tokenURI(uint256 tokenID_) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenID_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### transfer

```solidity
function transfer(address to_, uint256 amount_) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to_ | address | undefined |
| amount_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address from_, address to_, uint256 tokenID_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| tokenID_ | uint256 | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```



*Emitted when `owner` enables `approved` to manage the `tokenId` token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```



*Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```



*Emitted when `tokenId` token is transferred from `from` to `to`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



