import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useMemo, useRef } from "react";
import { clusterApiUrl, Keypair } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import clientPromise from '../lib/mongodb';
import { MongoClient } from 'mongodb';
import NextCors from 'nextjs-cors';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import Leaderboard from "@/components/Leaderboard";
import { getLeaderboard, LeaderboardItem } from "@/lib/clicker-anchor-client";
import axios from "axios";
import { map } from 'rxjs/operators';
import SendToken from 'components/TokenUi'
import {convertAniBinaryToCSS} from 'ani-cursor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1 } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  airdrop,
  getCurrentGame,
  saveClick,
} from "../lib/clicker-anchor-client";










import FAQItem from "@/components/FaqItem";
import ExternalLink from "@/components/ExternalLink";

const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
// const MONGODB_URI='mongodb://localhost:27017/?retryWrites=true&w=majority'
// import { createClient } from '@supabase/supabase-js'
// import { Database, Tables, Enums, TablesInsert, TablesUpdate, Json } from '../database.types'

const Home: NextPage = () => {
  const metaTitle = "Solana Clicker";
  const metaDescription =
    "Solana Clicker is an exciting ans simple clicker game to earn tokens. Just clickety click. Keep Clicking and keep earning!!!!";
  const metaAbsoluteUrl = "https://www.solclicker.io/";
  const metaImageUrl = "https://www.solclicker.io/home.png";


  
  

  const [clicks, setClicks] = useState(0);
  const [effect, setEffect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isGameReady, setIsGameReady] = useState(false);
  const [solanaExplorerLink, setSolanaExplorerLink] = useState("");
  const [gameError, setGameError] = useState("");
  const [gameAccountPublicKey, setGameAccountPublicKey] = useState("");
  const [leaders, setLeaders] = useState<LeaderboardItem[]>([]);
  const [sdata, setData] = useState([]);

  const { connected } = useWallet();
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallet = useWallet();
  const [clickCount, setClickCount] = useState(0);
  const [totalClick, settotalClick] = useState(0);
  const [level, setLevel] = useState(0);

  
  // async function applyCursor(selector, aniUrl) {
  //   const response = await fetch(aniUrl);
  //   const data = new Uint8Array(await response.arrayBuffer());
  
  //   const style = document.createElement('style');
  //   style.innerText = convertAniBinaryToCSS(selector, data);
  
  //   document.head.appendChild(style);
  // }
  // useEffect(() => {
    
  //   applyCursor("#main", "https://www.agoracnft.io/linkselect.ani")
  //    })



return (
    <div className="flex items-center flex-col sm:p-4 p-1" id="cur">
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content={metaAbsoluteUrl} />
        <meta property="og:image" content={metaImageUrl} />
        <meta property="og:description" content={metaDescription} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImageUrl} />
        

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />


      </Head>
      

      <div className="navbar mb-2 bg-base-300 text-base-content rounded-box sm:p-4 headbg">
        <div className="flex-1 text-xl font-mono">SolClicker</div>
            <a href="https://t.me/solclicker">
            <FontAwesomeIcon width={30} icon={faTelegram} className="mr-5"/>
            </a>
            <a href="https://x.com/solclicked">
            <FontAwesomeIcon width={30} icon={faTwitter}/>
            </a>
        <ul className="inline-block">
          <li>
          </li>
        </ul>
        <div>
          <WalletMultiButton />
        </div>
        {/* <div className="badge badge-accent badge-outline flex-none w-full XXXml-2">
          <a href="#devnet">devnet</a>
        </div> */}
      </div>




      <div>
        <div className="flex-col sm:flex-row gap-5 h-full items-center flex justify-center" style={{height:'auto'}}>
          <div className="p-4 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center p-2">
              {isGameReady && gameError && (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{gameError}</span>
                  </div>
                </div>
              )}
                  
            
<SendToken/>

              
            </div>
            <p className="font-black text-2xl" style={{color:'black !important'}}>Level Reached: {level}</p>
            <button
              // disabled={!isGameReady}
              
              className="text-primary-content h-36 w-36 rounded-full"
            >
            <img className="animate-bounce meme" id="meme" src="/meme.png" width="200px" height="150px" />
              {/* Click Me */}
            </button>
              <h1 className="font-black text-2xl" style={{color:'black !important'}}>Number of clicks {totalClick}</h1>
            
          </div>

          {wallet && (
            // <Leaderboard
            //   leaders={leaders}
            //   wallet={wallet.publicKey.toBase58()}
            //   clicks={clicks}
            // />

            //////////////// 
            // LeaderBoards
            ////////////////
            <div className="sm:p-10 items-center flex flex-col">
            <p className="text-2xl blacked mb-4">Leaderboard</p>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th className="text-center">Rank</th>
                    <th className="text-center">Player</th>
                    <th className="text-center">Total Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {sdata.map((item:any, index:any) => (
                    <tr key={item.wallet}>
                      <th className="text-center">{index + 1}</th>
                      <td className="text-center">

                        {/* {item.wallet === wallet ? (
                          <b>You</b>
                          {settotalClick(item.clicks)}
                        ) : (
                          <p></p>
                        )} */}
                        <p>{item.wallet}</p>
                      </td>
                      <td className="text-center">{item.clicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>





          )}
        </div>
      </div>

      <a id="faqs"></a>
      <footer className="w-full mt-24 p-3 sm:w-3/4 xl:w-2/3 text-xs">
        <div className="text-2xl text-center text-black">FAQs</div>

        <FAQItem faq="Is this a real game?">
          <>
            <p>
              Yes, it is!!. This game is being developed on Solana
              Blockchain. It&apos;s in the form of a game with
              very simple rules. Just keep Clicking. The wallet with most clicks wins a surprise prize!!!! the next 2 wallets will also receive our tokens as token of appreciation and hardwork of clicking!!!
            </p>
           
          </>
        </FAQItem>

        <FAQItem faq="Which web browsers are supported?">
          <>
            This game should run on any browser that support Web3 and a Solana
            wallet. Officially tested on desktop Firefox and desktop Chrome.
          </>
        </FAQItem>

        <FAQItem faq="What are the rules of this game?">
          <>
            <p>The goal is to be the player with the most clicks.</p>

            <p className="mt-3">
              Today players can only acquire clicks manually. The future plan is
              to grow this into a full-fledged Clicker game where players earn
              auto-clickers by purchasing click bots.
            </p>
          </>
        </FAQItem>

        <a id="wallet"></a>
        <FAQItem faq="How do I select a wallet and play the game?">
          <>
            <p>
              This game runs in a desktop web-browser which connects directly
              with the Solana blockchain. The blockchain is like a public
              database that&apos;s keeping track of your score.
            </p>
            <p className="mt-3">
              To connect to a blockchain, you need a wallet. Phantom is a Solana
              wallet that installs on your browser, though there are many
              choices. Visit{" "}
              <ExternalLink
                href="https://docs.solana.com/wallet-guide"
                text="Solana Wallet Guide"
              />{" "}
              for more help. We support Phantom, Solflare, Torus, Glow and
              Slope. Let us know if your favorite wallet is not on the list.
            </p>
            <p className="mt-3">
              Once you have a wallet, and you&apos;ve created your account in
              the wallet, you can now choose{" "}
              <span className="font-bold">select wallet</span> to connect and
              play.
            </p>
            
            <ul className="mt-3 list-disc ml-5 text-secondary">
              
              {/* <li>
                You need to make one change in your wallet. You can still the
                same same account as <span className="font-bold">mainnet</span>,
                but you need to switch to{" "}
                <span className="font-bold">devnet</span> instead of the default{" "}
                <span className="font-bold">mainnet</span>. If using Phantom
                Wallet here's how to{" "}
                <ExternalLink
                  href="https://hello-17.gitbook.io/crema-devnet-test-guide/switch-your-solana-wallet-to-devnet"
                  text="Switch Your Solana Wallet to Devnet"
                />
                .
              </li> */}
            </ul>
          </>
        </FAQItem>

        <a id="devnet"></a>
      

        <FAQItem faq="What is Solana?">
          <>
            &quot;Solana is a decentralized blockchain built to enable scalable,
            user-friendly apps for the world.&quot; (from{" "}
            <ExternalLink href="https://solana.com/" text="solana.com" />)
          </>
        </FAQItem>
        <FAQItem faq="What is the tokenomics?">
          <>
            &quot;Supply wiill be 1 Billion Tokens&quot;
            From which 30% will be dedicated to the team
            40% reserved for rewards & the rest 30% for Liquidity
          </>
        </FAQItem>
        
      </footer>
    </div>
  );
};

export default Home;
