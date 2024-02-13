import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
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



import {
  airdrop,
  getCurrentGame,
  saveClick,
} from "../lib/clicker-anchor-client";

import FAQItem from "@/components/FaqItem";
import ExternalLink from "@/components/ExternalLink";

const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
// const MONGODB_URI='mongodb://localhost:27017/?retryWrites=true&w=majority'



const Home: NextPage = () => {
  const metaTitle = "Solana Clicker";
  const metaDescription =
    "Solana Clicker is an exciting ans simple clicker game to earn tokens. Just clickety click. Keep Clicking and keep earning!!!!";
  const metaAbsoluteUrl = "https://solclicker.io/";
  const metaImageUrl = "https://solclicker.io/home.png";

  const [clicks, setClicks] = useState(0);
  const [effect, setEffect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isGameReady, setIsGameReady] = useState(false);
  const [solanaExplorerLink, setSolanaExplorerLink] = useState("");
  const [gameError, setGameError] = useState("");
  const [gameAccountPublicKey, setGameAccountPublicKey] = useState("");
  const [leaders, setLeaders] = useState<LeaderboardItem[]>([]);
  const [data, setData] = useState([]);

  const { connected } = useWallet();
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallet = useAnchorWallet();
  const [clickCount, setClickCount] = useState(0);
  const [totalClick, settotalClick] = useState(0);
  const [level, setLevel] = useState(0);


  async function handleClick() {
    setGameError("");
    if (wallet) {
      // try {
      //   await saveClick({ wallet, endpoint, gameAccountPublicKey });
      //   setClicks(clicks + 1);
      //   setEffect(true);
      // } catch (e) {
      //   if (e instanceof Error) {
      //     setGameError(e.message);
      //   }
      // }
     
      
      
      // axios.post('https://clicker-eta.vercel.app/api/users/check', {wallet: wallet.publicKey.toBase58()})
      // .then((response) => {
      //   console.log(response)
      //   setClickCount(clickCount + 1)
      //   settotalClick(response.data.data.clicks)
      //   console.log(response.data.data)
      //   console.log("Total Clicks" + totalClick)
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

    }
      
     

      // console.log("PATCH Clicks + " + totalClick)

      
      setClickCount(clickCount + 1)
      settotalClick(totalClick + 1)
      // Check if the totalClicks is a multiple of 10
      if (clickCount % 10 === 0) {
        // Level up and double the required clicks for the next level
        setLevel(level + 1);



         let clkdata = {
          wallet: wallet?.publicKey.toBase58(),
          clicks: clickCount,
          level: level
        };
        axios.patch('https://clicker-eta.vercel.app/api/users', clkdata)
        .then((response) => {
          console.log(response)
          // settotalClick(response.data.data.clicks)
        })
        .catch((error) => {
          console.log(error);
        });

  console.log("Total Clicks " + clickCount)
  console.log("Reached Level " + level)
}


  }







  
  async function initGame() {
    if (wallet) {

      let chkdata = {
        wallet: wallet.publicKey?.toBase58(),
      };
      
      
      
      
      axios.post('https://clicker-eta.vercel.app/api/users/check', chkdata)
      .then((response: any) => {
        
        settotalClick(response.data.data.clicks)
        console.log("Total Clicks = " + response.data.data.clicks)
        console.log("Current Click Count = " + clickCount)
        settotalClick(response.data.data.clicks)
        setLevel(response.data.data.level)

        
      })
      .catch((error: any) => {
        console.log(error);
      });
      
      
      // Create New User
      
      let newusrdata = {
        wallet: wallet.publicKey?.toBase58(),
        clicks: 0,
        level: 0
      };
      axios.post('https://clicker-eta.vercel.app/api/users', newusrdata)
      .then((response: any) => {
        console.log(response)
        
      })
      .catch((error: any) => {
        console.log(error);
      });


      
      axios.get('https://clicker-eta.vercel.app/api/users')
      .then((response: any) => {
        console.log(response.data.data)
        setData(response.data.data)
        // data.map((item, index) => (
        //   {item.wallet === wallet ? (
        //     {setClickCount(item.clicks)}
        //   ) : (
        //     {item.wallet}
        //   )}
        // ))
        
        // if (data.wallet === wallet.publicKey.toBase58()) {
        //   setClickCount(data.clicks)
        //   console.log("Total Clicks" + data.clicks)
        // }
        
      })
      .catch((error: any) => {
        console.log(error);
      });




      
      // const gameState = await getCurrentGame({ wallet, endpoint });
      // setIsGameReady(connected && gameState.isReady);
      // setClicks(gameState.clicks);
      // setGameAccountPublicKey(gameState.gameAccountPublicKey);
      // setSolanaExplorerLink(
      //   `https://explorer.solana.com/address/${gameAccountPublicKey}/anchor-account?cluster=${network}`
      // );
      // setGameError(gameState.errorMessage);
    } else {
      // setIsGameReady(false);
      // setClicks(0);
      // setGameAccountPublicKey("");
      // setSolanaExplorerLink("");
      // setGameError("");
    }
  }
  // setIsConnected(connected);
  initGame();









  useEffect(() => {


    // axios.get('https://clicker-eta.vercel.app/api/users/leaders')
    // .then((response: any) => {
    //   console.log(data)

    // })
    // .catch((error: any) => {
    //   console.log(error);
    // });



  }, [connected, endpoint, network, wallet, gameAccountPublicKey, totalClick, level]);

  // airdrop test SOL if on devnet and player has less than 1 test SOL
  useEffect(() => {
    async function fetchTestSol(): Promise<void> {
      if (wallet) {
        try {
          await airdrop({ wallet, endpoint });
        } catch (e) {
          if (e instanceof Error) {
            console.error(`Unable to airdrop 1 test SOL due to ${e.message}`);
          }
        }
      }
    }
    // fetchTestSol();
  }, [connected, wallet, endpoint]);

  // For leaderboard, persist expensive "retrieve all game data" via useState()
  useEffect(() => {
    (async function getLeaderboardData() {
      if (wallet) {
        // setLeaders(await getLeaderboard({ wallet, endpoint }));
      }
    })();
  }, [wallet, endpoint]);

  return (
    <div className="flex items-center flex-col sm:p-4 p-1">
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
      </Head>

      <div className="navbar mb-2 bg-base-300 text-base-content rounded-box sm:p-4">
        <div className="flex-1 text-xl font-mono">Solana Clicker</div>
        <div>
          <WalletMultiButton />
        </div>
        {/* <div className="badge badge-accent badge-outline flex-none XXXml-2">
          <a href="#devnet">devnet</a>
        </div> */}
      </div>

      <div>
        <div className="flex flex-col sm:flex-row gap-5">
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
              {isGameReady && (
                <div
                  onAnimationEnd={() => {
                    setEffect(false);
                  }}
                  className={`${effect && "animate-wiggle"}`}
                >
                  {clickCount} clicks
                </div>
              )}
            </div>
            <p>Level Reached: {level}</p>
            <button
              // disabled={!isGameReady}
              onClick={() => {
                handleClick();
              }}
              className="btn btn-lg bg-primary hover:bg-primary-focus text-primary-content border-primary-focus border-4 h-36 w-36 rounded-full"
            >
              Click Me
            </button>
              <h1>Number of clicks {totalClick}</h1>
            {/* {isGameReady && (
              <div>
                View game{" "}
                <a
                  className="underline"
                  href={solanaExplorerLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  details
                </a>{" "}
                on Solana.
              </div>
            )} */}
{/* 
            {!isConnected && (
              <p className="p-2 text-center">
                To play game, please click{" "}
                <span className="font-bold">Select Wallet</span> above to choose
                your Solana wallet.
              </p>
            )} */}

            {/* <p>
              See{" "}
              <a className="underline" href="#faqs">
                FAQs
              </a>{" "}
              below for more information.
            </p> */}
{/* 
            {!isGameReady && isConnected && (
              <div>
                <p className="p-2">Game initializing...</p>
              </div>
            )} */}
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
            <div className="text-2xl mb-4">Leaderboard</div>
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
                  {data.map((item:any, index:any) => (
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
        <div className="text-2xl text-center">FAQs</div>

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
              auto-clickers by purchasing NFTs. Each NFT will automatically
              increase a player&apos;s points automatically.
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
        
      </footer>
    </div>
  );
};

export default Home;
