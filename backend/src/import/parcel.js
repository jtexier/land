require("dotenv").config()

const fs = require('fs')

const formatId = (id) => {
    const result = id.replace(/\s/g,'0')
    return result.replace(/^790174/g,'79174')
}

const formatAddress = (address) => {
    if (typeof address !== "undefined") {
        address = address.trim()
    }
    return address
}

const formatOwner = (owner) => {
    if (typeof owner !== "undefined") {
        owner = owner.replace("79500 MELLE","")
        owner = owner.replace("DE LA MAIRIE MELLE","")        
        owner = owner.trim()
    }
    return owner
}

const nano = require('nano')({ url : process.env.DB_URL});
const featureTable = nano.use('feature')

 const mapParcel = async (parcel, parcelTable) => {
        if (typeof parcel.id !== "undefined" && parcel.id !== "Référence") {
            const feature = await featureTable.get(parcel.id)
            parcel.geometry = feature.geometry
            parcelTable.insert(parcel,parcel.id)
        }
}

(async () => {
    const csv = fs.readFileSync('./data/melle.csv', 'utf8')
    const lines = csv.split(/\r?\n/)

    const parcels = lines.map(line => {
        const [id, address, area, account, owner]= line.split(';')
        return {id: formatId(id), 
            address: formatAddress(address), area, account, 
            owner: formatOwner(owner)}
    })
await nano.db.destroy('parcel')
await nano.db.create('parcel')
const parcelTable = nano.use('parcel')

    return Promise.all(parcels.map(parcel => mapParcel(parcel, parcelTable)))
})();

 module.exports =  {formatId, formatAddress, formatOwner}