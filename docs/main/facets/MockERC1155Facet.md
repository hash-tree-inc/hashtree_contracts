# MockERC1155Facet









## Methods

### balanceOf

```solidity
function balanceOf(address account_, uint256 id_) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account_ | address | undefined |
| id_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts_, uint256[] ids_) external view returns (uint256[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| accounts_ | address[] | undefined |
| ids_ | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### construct

```solidity
function construct() external nonpayable returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### exists

```solidity
function exists(uint256 id_) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address account_, address operator_) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account_ | address | undefined |
| operator_ | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from_, address to_, uint256[] ids_, uint256[] amounts_, bytes data_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| ids_ | uint256[] | undefined |
| amounts_ | uint256[] | undefined |
| data_ | bytes | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from_, address to_, uint256 id_, uint256 amount_, bytes data_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| id_ | uint256 | undefined |
| amount_ | uint256 | undefined |
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

### totalSupply

```solidity
function totalSupply(uint256 id_) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### uri

```solidity
function uri(uint256 tokenID_) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenID_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |



## Events

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed account, address indexed operator, bool approved)
```



*Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to `approved`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### TransferBatch

```solidity
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)
```



*Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all transfers.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| ids  | uint256[] | undefined |
| values  | uint256[] | undefined |

### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)
```



*Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id  | uint256 | undefined |
| value  | uint256 | undefined |

### URI

```solidity
event URI(string value, uint256 indexed id)
```



*Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI. If an {URI} event was emitted for `id`, the standard https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value returned by {IERC1155MetadataURI-uri}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| value  | string | undefined |
| id `indexed` | uint256 | undefined |



