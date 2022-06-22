
require("dotenv").config()
const fs = require('fs')
const nano = require('nano')({ url : process.env.DB_URL });

(async () => {
  const json = fs.readFileSync('./data/cadastre-79174-parcelles.json', 'utf8')
  const data = JSON.parse(json);

  await nano.db.destroy('feature')
  await nano.db.create('feature')
  const table = nano.use('feature')

  data.features.map(feature => table.insert(feature, feature.id))
})();

