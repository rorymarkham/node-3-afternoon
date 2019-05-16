module.exports = {
    createProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body

        dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oh the humanity!'})
        })
    },

    getOneProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req

        dbInstance.read_product([params.id])
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oh the humanity'})
        })
    },

    getAllProducts: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oh the humanity'})
        })
    },

    updateProduct: (res, req, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req

        dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'oh the humanity'})
        })
    },

    deleteProduct: (res, req, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req

        dbInstance.delete_product([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'oh the humanity'})
            })
    }
}