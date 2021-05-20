import { NextApiHandler } from "next";
import { products } from "./data";

const handler: NextApiHandler = async (req, res) => {

  // const { pageId } = req.query;
  // console.log( `Preview mode requested @page(${pageId}).`  );
  // Redirect to the path for preview
  //res.redirect(page.slug);
  //res.end();

  //console.log(`Cleared preview mode.`);
  //res.clearPreviewData();
  //return res.status(200).end();

  return res.status(200).json(products)

};

export default handler;
