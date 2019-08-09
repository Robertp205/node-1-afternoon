const products = require('../products.json');

const getProduct = (res, req) => {
    const item = products.find(perhaps => perhaps.id === parseInt(req.params))
    if(!item){
        return res.status(500).send('Items not in the list mang')
    }
    res.status(200).send(item)
}

module.exports = getProduct;