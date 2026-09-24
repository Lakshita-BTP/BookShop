const cds = require('@sap/cds')
class CatalogService extends cds.ApplicationService {
    init() {

        // After READ handler on Books to add discount info
        this.after('READ', 'Books', results => results.forEach(book => {
            if (book.stock > 111) book.title += ` -- 11% discount!`
        }))

        return super.init()
    }
}
module.exports = { CatalogService }