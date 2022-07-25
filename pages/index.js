import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {4: process.env.NEXT_PUBLIC_RPC_URL}
    },
  },
}

// if (typeof window.ethereum !== "undefined") {
//   web3Modal = new Web3Modal({
//     cacheProvider: false,
//     providerOptions, // required
//   })
// }

export default function Home() {
  async function connect(){
    web3Modal = new web3Modal({
      cacheProvider: false,
      providerOptions, //provider
    })
    const web3ModalProvider = await web3Modal.connect()
  }
  return (
    <div className={styles.container}>
      
    </div>
  )
}
