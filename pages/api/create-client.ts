import { createClient } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const users = createClient({
    url: 'https://bold-poodle-38499.upstash.io',
    token: 'AZZjASQgYWMxODhkYTYtNDM1MS00NTI2LWJmN2EtOTA5NWIzZjRjMjMzMGI4YTA0MmY2MzgxNDk3MDgxYmI1OWUyNWJhNDdkYTk=',
  });
 
  const user = await users.hgetall('user:me');
 
  const products = createClient({
    url: "https://bold-poodle-38499.upstash.io",
    token: "AZZjASQgYWMxODhkYTYtNDM1MS00NTI2LWJmN2EtOTA5NWIzZjRjMjMzMGI4YTA0MmY2MzgxNDk3MDgxYmI1OWUyNWJhNDdkYTk=",
  });
 
  async function exampleCommands() {
    try {
      await users.hset('user:name', 'zasha');
    } catch (error) {
      // Handle errors
    }
  }

  exampleCommands()
 
  return response.status(200).json({ user });
}