module.exports = Object.freeze({
    TUGPAIR_SC_1: '0x64D1A629A8Cb66D1db9ad7Be2bBC54fabA4dD3fA',
    TUGPAIR_SC_2: '0x9Af906bd2A8beF0977e5567E471753B60219E21F',
    FROM_ADDRESS: '0x803710c060846B2BB0e047Cde862DE168528f4F4',
    TUGPAIR_ABI: [
        {
          inputs: [],
          name: "CannotDepositToEpochZero",
          type: "error"
        },
        {
          inputs: [],
          name: "DepositIsZero",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "DepositTooLow",
          type: "error"
        },
        {
          inputs: [],
          name: "EpochDurationIsZero",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            }
          ],
          name: "EpochNotConcluded",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "currentEpoch",
              type: "uint256"
            }
          ],
          name: "EpochOutOfSync",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            }
          ],
          name: "EpochPreviouslyConcluded",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "EpochWinningsAlreadyClaimed",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "invalidSide",
              type: "uint8"
            }
          ],
          name: "InvalidDepositSide",
          type: "error"
        },
        {
          inputs: [],
          name: "InvalidSharePrice",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "invalidTokenIndex",
              type: "uint8"
            }
          ],
          name: "InvalidTokenIndex",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "tokenIndexWithInvalidPrice",
              type: "uint8"
            }
          ],
          name: "InvalidTokenPrice",
          type: "error"
        },
        {
          inputs: [],
          name: "InvalidTreasuryAddress",
          type: "error"
        },
        {
          inputs: [],
          name: "TokenTransferFailed",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "usdCollected",
              type: "uint256"
            }
          ],
          name: "Collection",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint8",
              name: "side",
              type: "uint8"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "usdAmount",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "sharesIssued",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            }
          ],
          name: "EpochEnded",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256"
            }
          ],
          name: "EpochStarted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "Paused",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "Unpaused",
          type: "event"
        },
        {
          inputs: [],
          name: "collectFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_epochs",
              type: "uint256[]"
            }
          ],
          name: "collectWinnings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_epochs",
              type: "uint256"
            }
          ],
          name: "collectWinningsPerEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_side",
              type: "uint8"
            }
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_tugStorageAddress",
              type: "address"
            },
            {
              internalType: "address",
              name: "_depositToken",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_token0Index",
              type: "uint8"
            },
            {
              internalType: "uint8",
              name: "_token1Index",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "_epochDuration",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "unpause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "accumulatedFees",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "currentTug",
          outputs: [
            {
              internalType: "uint256",
              name: "epochAmount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "userLatestEpoch",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "depositToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "epochData",
          outputs: [
            {
              internalType: "uint256",
              name: "token0InitialPrice",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "token1InitialPrice",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "token0SharesIssued",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "token1SharesIssued",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalPot",
              type: "uint256"
            },
            {
              internalType: "int8",
              name: "winningSide",
              type: "int8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "epochDuration",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getDepositToken",
          outputs: [
            {
              internalType: "address",
              name: "depositTokenToReturn",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getLatestEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "latestEpoch",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_side",
              type: "uint8"
            }
          ],
          name: "getQtyOfSharesToIssue",
          outputs: [
            {
              internalType: "uint256",
              name: "qtyOfShares",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epochToCheck",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "getSharesBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "token0Shares",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "token1Shares",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epochToCheck",
              type: "uint256"
            }
          ],
          name: "getSharesIssued",
          outputs: [
            {
              internalType: "uint256",
              name: "token0SharesIssued",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "token1SharesIssued",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "getUserCurrentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "latestEpoch",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalDeposit",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_epoch",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_user",
              type: "address"
            }
          ],
          name: "getWinnings",
          outputs: [
            {
              internalType: "uint256",
              name: "amountOfDaiWinnings",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "LOSE_SIDE_MUL",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "paused",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pricingEngine",
          outputs: [
            {
              internalType: "contract PricingEngineInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "startTime",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "token0Index",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "token1Index",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "tokenRegistry",
          outputs: [
            {
              internalType: "contract TokenRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "tugStorage",
          outputs: [
            {
              internalType: "contract TugStorageInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "WIN_FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "WIN_SIDE_MUL",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
    ],
    TOKEN_REGISTRY_ABI: [
        {
          inputs: [
            {
              internalType: "uint8",
              name: "index",
              type: "uint8"
            }
          ],
          name: "InvalidPrice",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "invalidIndex",
              type: "uint8"
            }
          ],
          name: "InvalidTokenIndex",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "symbol",
              type: "string"
            }
          ],
          name: "SymbolAlreadyRegistered",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chainlinkAddress",
              type: "address"
            }
          ],
          name: "UnableToReadOraclePriceDuringRegistry",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "index",
              type: "uint8"
            }
          ],
          name: "TokenRegistered",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          name: "chainlinkOracles",
          outputs: [
            {
              internalType: "contract AggregatorV3Interface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_index",
              type: "uint8"
            }
          ],
          name: "getPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "price",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "decimal",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_index",
              type: "uint8"
            }
          ],
          name: "getSymbol",
          outputs: [
            {
              internalType: "string",
              name: "symbol",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            }
          ],
          name: "getTokenIndex",
          outputs: [
            {
              internalType: "uint8",
              name: "index",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_chainlinkOracle",
              type: "address"
            }
          ],
          name: "registerToken",
          outputs: [
            {
              internalType: "uint8",
              name: "index",
              type: "uint8"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          name: "symbols",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "tokenCount",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
    ],
});