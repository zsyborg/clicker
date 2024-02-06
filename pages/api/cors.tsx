
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'micro-cors';

// Create a CORS middleware
const corsMiddleware = cors({
  allowMethods: ['GET', 'HEAD', 'POST', 'OPTIONS'], // Add the HTTP methods you need
});

// Create a handler for your API route
const handler = async (req, res) => {
  // Your API logic goes here
  res.json({ message: 'Hello from your API!' });
};

// Apply CORS middleware to the handler
export default corsMiddleware(handler);
