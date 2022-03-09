require("dotenv").config()

console.log(process.env.DB_URL);
const nano = require('nano')({ url : process.env.DB_URL});

(async () => {
    const db = nano.use('parcel')

    const parcels = await db.list({include_docs: true})
    console.log(parcels)
    const results = parcels.rows.map(parcel => parcel.doc)
    console.log(results)
})();

