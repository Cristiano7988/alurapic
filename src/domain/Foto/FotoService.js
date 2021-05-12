export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    lista() {
        return this._resource
            .query()
            .then(r=>r.json());
    }

    cadastra(foto) {
        return foto._id
            ? this._resource.update({ id: foto._id }, foto)
            : this._resource.save(foto);
    }
    
    apaga(id) {
        return this._resource
            .delete({ id });
    }

    busca(id) {
        return this._resource
            .get({ id })
            .then(r=>r.json())
    }
}