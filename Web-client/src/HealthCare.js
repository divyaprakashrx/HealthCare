import web3 from "./web3";

const address = "0xFb27Fa7BfA59efC40785B3CC2dfed71199a7eB1e";

const abi= [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "testName",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "hospitalName",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "recordCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "testName",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "hospitalName",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "recordSigned",
        type: "event",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "_records",
        outputs: [
          {
            internalType: "uint256",
            name: "ID",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "signatureCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "testName",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "string",
            name: "hospitalName",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isValue",
            type: "bool",
          },
          {
            internalType: "address",
            name: "pAddr",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "recordsArr",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_ID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_tName",
            type: "string",
          },
          {
            internalType: "string",
            name: "_date",
            type: "string",
          },
          {
            internalType: "string",
            name: "hName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        name: "newRecord",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_ID",
            type: "uint256",
          },
        ],
        name: "signRecord",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getRecords",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "returnLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ]


export default new web3.eth.Contract(abi, address);
