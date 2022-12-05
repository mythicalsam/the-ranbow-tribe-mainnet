const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'The Rainbow Tribe',
  description: 'TRT DAPP',
  contractAddress: '0x99512aaC7F817D29fF69245EB39A16B7C43e85b7',
  maxMintAmount: 10,
  WlMaxMintAmount: 5, 
  firstCost :0 ,
  wlcost: 0.01,
  publicSalePrice:0.02,
  maxPerTxWL : 5 
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 1, // Mainnet
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true }
     
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }


