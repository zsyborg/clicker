import { NextApiRequest, NextApiResponse } from 'next'
// const MONGODB_URI = process.env.MONGODB_URI!
import dbConnect from '../../../lib/dbConnect'
import clientPromise from '../../../lib/mongodb'
import { MongoClient } from 'mongodb'
import NextCors from 'nextjs-cors'
import { Client } from "twitter-api-sdk";

const client = new Client("AAAAAAAAAAAAAAAAAAAAABCGtQEAAAAA%2FH1SGZ0uSeTqTLW5R776ibZCWdo%3D9HJbOem7OB7lvMk7ujPBzZH9JFhy5JZ98nJPiBmE1T4mzuqnPe");

const axios = require('axios');
// const qs = require('qs');

const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
// const MONGODB_URI="mongodb://127.0.0.1:27017"


export const config = {
  maxDuration: 10,
};


async function listDatabases(client: MongoClient){
  const db = client.db('Inviter')
  const coll = db.collection('Users')
  const items = coll.find()
  // console.log(items)
  return items
};




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    
    
    
    ////////////////////////
    /////GET All Users Details 
    ////////////////////////
    
    
    case 'GET':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
      var opts = {
        dbName: 'Inviter',
        server:
        { socketOptions: 
          { 
            socketTimeoutMS: 5000, 
            connectTimeoutMS: 10000 
          }
        }
      }

      

      try {

        
    const clt = new MongoClient(MONGODB_URI, opts)
    
    const huntCollection = clt.db("Inviter").collection("Users")
    // const crd = await huntCollection.find({}).toArray()
    const crd = await huntCollection.find().sort({clicks: -1}).toArray()
      

        res.status(200).json({ success: true, data: crd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

////////////////////////
// POST - Create New User
//////////////////////// 
    case 'POST':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

    // const clt = new MongoClient(MONGODB_URI)
    // const huntCollection = clt.db("Inviter").collection("Users")
    // const curruser = JSON.stringify(req.body)
    // const usr = JSON.parse(curruser)
    // const wlt = usr.wallet

    // // const getAllUsers = await huntCollection.findOne({ wallet: wlt }, { projection: { _id: 0 } })

    //  // Check if the user already exists
    //  const existingUser = await huntCollection.findOne({ wallet: wlt });
    // if (existingUser) {
    //   res.status(201).json({ success: true, data: existingUser })
    //   clt.close()
    // } else {
    //   const crd = await huntCollection.insertOne(req.body)
    //   res.status(201).json({ success: true, data: crd })
    //   clt.close()
    // }
    // Condition to check is user exists. Create if doesn't
    /*if (getAllUsers.wallet === wlt) {
      console.log("User Exists")
      res.status(201).json({ success: true, data: getAllUsers, user: "User Exists" })
    } else {
      const data = {
        wallet: req.body.wallet,
        click: 0
      }
      console.log("User Doesn't Exists")
    }
    */







    // let data = JSON.stringify({
    //   'grant_type': 'client_credentials' 
    // });
    
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://api.twitter.com/oauth2/token',
    //   headers: { 
    //     'consumer_key': '7RiddfgFIESOW6VZx9srqRUdw', 
    //     'consumer_secret': 'WUTR8zvPlnXPNcftESiBt5G7MWWZsHfYv9JUkTz1JeK4QAgRIJ', 
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 
    //     'access_token': '1695124202053910536-hu6FZMh4YXk6mlQiHPPtL2TTsHr43F', 
    //     'token_secret': '0l2KmJ0cEgR9R2vlPOBTCTvORfjnV9Vv5nj4AZ2Atgb1T', 
    //     'client_id': 'Z0xHV1VrdUF4cmlycndDMGpXMUI6MTpjaQ', 
    //     'client_secret': 'f9CMsJQBw5P9OpadbJxlODV1G0sN2rsfvJF9-PttpqgvipEhPe', 
    //     'Authorization': 'Basic N1JpZGRmZ0ZJRVNPVzZWWng5c3JxUlVkdzpXVVRSOHp2UGxuWFBOY2Z0RVNpQnQ1RzdNV1dac0hmWXY5SlVrVHoxSmVLNFFBZ1JJSg==', 
    //     'Cookie': 'guest_id=v1%3A171246219098204123; guest_id_ads=v1%3A171246219098204123; guest_id_marketing=v1%3A171246219098204123; personalization_id="v1_xzo+im0t+3gklY3EtKLmFA=="'
    //   },
    //   data : data
    // };
    
    // axios.request(config)
    // .then((response:any) => {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch((error:any) => {
    //   console.log(error);
    // });
    

    async function main() {
      const tweet = await client.tweets.findTweetById("20");
      res.status(200).json({ success: true, data: tweet })
      // console.log(tweet);  
    }
    
    main();



      break

      ////////////////////////
      // PATCH - Update User Click score
      //////////////////////// 
          case 'PATCH':
            
        await NextCors(req, res, {
          // Options
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
          origin: '*',
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
       });
       
       const clty = new MongoClient(MONGODB_URI)
       const usrCollection = clty.db("Inviter").collection("Users")
       
       const currusr = JSON.stringify(req.body)
       const usry = JSON.parse(currusr)
       const wlty = usry.wallet
       
       const ucl = JSON.stringify(req.body)
       const cl = JSON.parse(ucl)
       const userclicks = cl.clicks
       const lvl = cl.level
       
       
       console.log("PATCH " + wlty)
          const patchUserClick = await usrCollection.updateOne({ wallet: wlty }, { $set: { clicks: userclicks, level: lvl } })
          res.status(200).json({ success: true, data: patchUserClick })
          clty.close()


      // Default if all others fail
    default:
      res.status(400).json({ success: false, data: "Default Output" })
      break
  }
}
