import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import WalletConnectProvider from "@walletconnect/web3-provider"
import {abi} from "../constants/abi"

let web3Modal

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {4: process.env.NEXT_PUBLIC_RPC_URL}
    },
  },
}

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  })
}

export default function Home() {
  async function connect(){
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions, //provider
    })
    const web3ModalProvider = await web3Modal.connect()
  }
  return (
    <div className={styles.container}>
      <button onClick={() => connect()}>Connect</button>
    </div>
  )
}
