## Solidity smart contracts optimizations. (With working examples)
#### - Read from storage or from memory
Always have in mind that reading from local function memory is much cheaper than reading from smart contract storage. I recommend you to use cached versions of storage variables any time you need to read a lot of times (If you need to read only once, probably won't matter)
#### - Write to storage or to memory
The same rule of cached reading works for writings. The recommendation is to save initial value of storage variable to a local memory variable, make all the operations over this memory variable and at the end write back only once the final value to the storage variable.
#### - Change value from non-zero to any instead of zero to any
Gas cost of changing a variable from 0 to non-zero is really high, and in some cases like mint algorithms that includes a transfer call, there are inside variables that come from 0 to 1 and back again to 0. So we change the mint algorithm to first mint all token and then make the transfers in a different loop.
#### - Variable Packing and Structs variables packing
EVM works with 32 bytes slots blocks of storage memory. When a smart contract use variables, EVM try to fit as much as possible in each slot, in the order designed by code. If you don't pay attention could end having a mess of half filled space.