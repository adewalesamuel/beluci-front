import { Api } from './Api';

const ENDPOINT = '/gallery-types';

const getAll = (params, signal) => {
    return Api.get(`${ENDPOINT}?page=${params?.page ?? ''}`, signal)
}

const getGallerysById = (id, params, signal) => {
    return Api.get(`${ENDPOINT}/${id}/gallerys?page=${params?.page ?? ''}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENDPOINT}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENDPOINT, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENDPOINT}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENDPOINT}/${id}`, signal)
}

export const GalleryTypeService = {
    ENDPOINT,
    getAll,
    getGallerysById,
    getById,
    create,
    update,
    destroy
}