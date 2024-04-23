


import * as web3 from '@solana/web3.js';

const connection = new web3.Connection('https://api.devnet.solana.com');
const provider = web3.Keypair.generate();

const fromWallet = web3.Keypair.fromSeed(new Uint8Array([59,31,155,148,57,148,14,240,124,109,179,255,191,44,76,110,192,74,101,158,118,157,187,135,45,254,99,17,125,100,180,212,107,240,96,255,124,28,39,95,24,48,90,245,6,146,254,107,85,234,98,132,93,34,150,134,200,197,99,255,8,185,58,197]));
const toAddress = new web3.PublicKey('CRSo9K9cnpn4knAMaZigg8C2xGaRz2Hw5HUxrftQdZz3');
// const amount = web3.LAMPORTS_PER_SOL;
const amount = 100 * web3.LAMPORTS_PER_SOL;

const transaction = new web3.Transaction().add(
  web3.SystemProgram.transfer({
    fromPubkey: fromWallet.publicKey,
    toPubkey: toAddress,
    lamports: amount,
  })
);

transaction.feePayer = provider.publicKey;

const signedTransaction = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [fromWallet],
);

console.log('Transaction successful!', signedTransaction);

