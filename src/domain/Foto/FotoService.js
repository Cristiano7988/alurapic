export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    lista() {
        return this._resource
            .query()
            .then(r => r.json(), err => {
                console.log(err)
                throw new Error('Não foi possível carregar as fotos')
            });
    }

    cadastra(foto) {
        return foto._id
            ? this._resource.update({ id: foto._id }, foto)
            : this._resource.save(foto);
    }
    
    apaga(id) {
        return this._resource
            .delete({ id })
            .then(null, err => {
                console.log(err)
                throw new Error('Não foi possível remover a foto')
            });
    }

    busca(id) {
        return this._resource
            .get({ id })
            .then(r=>r.json())
    }
}