# MockERC20Facet









## Methods

### allowance

```solidity
function allowance(address owner_, address spender_) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner_ | address | undefined |
| spender_ | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender_, uint256 amount_) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| spender_ | address | undefined |
| amount_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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

### decimals

```solidity
function decimals() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Returns the amount of tokens in existence.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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
function transferFrom(address from_, address to_, uint256 amount_) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from_ | address | undefined |
| to_ | address | undefined |
| amount_ | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```



*Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```



*Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |



