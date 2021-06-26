const { productsService } = require('../services')

const productsController = {
    async addProduct(req, res, next) {
        try {
            const product = await productsService.addProduct(req.body);
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async getProductById(req, res, next) {
        try {
            const _id = req.params.id;
            const product = await productsService.getProductById(_id);
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async updateProductById(req, res, next) {
        try {
            const _id = req.params.id;
            const product = await productsService.updateProductById(_id, req.body);
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async deleteProductById(req, res, next) {
        try {
            const _id = req.params.id;
            const product = await productsService.deleteProductById(_id);
            res.json(product)
        } catch (error) {
            next(error)
        }
    },
    async allProducts(req, res, next) {
        try {
            const products = await productsService.allProducts(req);
            res.json(products)
        } catch (error) {
            next(error)
        }
    },

}

// {
//     "model":"Dice Game",
//     "brand":"6049a1ad9c9a2615b86c04f2",
//     "description":"This is the content of the post",
//     "price":689,
//     "available":5,
//     "itemsSold":1,
//     "shipping":true
// }

module.exports = productsController