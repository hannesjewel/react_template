require("babel-register")({
  presets: ["es2015", "react"]
});

const API = require("../src/apis/admin").default;
const router = require("../src/sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

async function fetchResults(url) {
  
  const response = await API.get(`${url}`);
  
  const data = response.data.data;
  let slugMap = [];

  for (var i = 0; i < data.length; i++) {
    slugMap.push({ 
      slug: data[i].slug
     })
  }

  return slugMap;
}

async function generateSitemap() {

  const products = await fetchResults('products/all');
  const posts = await fetchResults('posts');

  console.log(products)

  try {

    const paramsConfig = {
      "/products/:slug": products,
      "/blog/:slug": posts
    };

    const siteMap = new Sitemap(router)
      .applyParams(paramsConfig)
      .build("https://www.beautyfires.com/")
      .save("./public/sitemap.xml");

    return siteMap
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();