import { NextApiRequest, NextApiResponse } from 'next'
import Card, {Cards} from '../../../models/Card'
const MONGODB_URI = process.env.MONGODB_URI!
import dbConnect from '../../../lib/dbConnect'
import clientPromise from '../../../lib/mongodb'
import { MongoClient } from 'mongodb'
import NextCors from 'nextjs-cors'


// const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'

async function listDatabases(client: MongoClient){
  const db = client.db('Clicker')
  const coll = db.collection('Users')
  const items = coll.find()
  // console.log(items)
  return items
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    case 'GET':
      var opts = {
        dbName: 'Clicker'
      }
      try {
        
    const clt = new MongoClient(MONGODB_URI)
    const huntCollection = clt.db("Clicker").collection("Users")
    const crd = await huntCollection.find({}).toArray()
    clt.close()
    
    res.status(200).json({ success: true, data: crd })
} catch (error) {
    res.status(400).json({ success: false })
}
break
case 'POST':
  
await NextCors(req, res, {
  // Options
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
});
    try {
        const clt = new MongoClient(MONGODB_URI)
        const huntCollection = clt.db("Clicker").collection("Users")
        const curusr = req.body
        console.log("Check " + curusr)
        const crd = await huntCollection.findOne({ wallet: req.body.wallet }, { projection: { _id: 0 } })
        clt.close()
        
       if (crd) {
         res.status(201).json({ success: true, data: crd })
      } else {
          res.status(201).json({ success: false, data: false })
       }

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
