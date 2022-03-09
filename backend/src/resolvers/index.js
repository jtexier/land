require("dotenv").config()

const nano = require('nano')({ url : process.env.DB_URL});
const db = nano.use('parcel')

const resolvers = {
    Query: {
      parcel: async (_,{id}) => {
        const parcel = await db.get(id)
        return parcel
      },
      parcels: async () => {
        const parcels = await db.list({include_docs: true})
        return parcels.rows.map(parcel => parcel.doc)
      }
    },
  };
  
  module.exports = resolvers;
  