import { NextApiHandler } from "next";
import { products } from "../data";

const handler: NextApiHandler = async (req, res) => {

  //const resultProduct=[{ ProductId: req.query.id, Method:req.method }]

  var resultProduct =  products.filter(function(product) {
    return product.Id == req.query.id;
  });

  // var resultProductLessData = resultProduct.map(({Id, Name, DecImage1}) => ({Id, Name, DecImage1}))

  switch (req.method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(resultProduct);
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json(resultProduct);
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }

};

export default handler;
