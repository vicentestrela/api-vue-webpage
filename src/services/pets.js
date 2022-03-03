import api from './api.js'

export default {

    listar: () => {
        return api.get('pets')
    },

    listarPetPeloId: (id) => {
        return api.get('pets/' + id)
    }

}