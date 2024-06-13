import { Api } from './Api';

const  ENPOINTS = {
    File: '/upload/file',
    Image: '/upload/image',
};

const imageStore = (payload, signal) => {
    return Api.postFormData(ENPOINTS.Image, payload, signal)
}

const fileStore = (payload, signal) => {
    return Api.postFormData(ENPOINTS.File, payload, signal)
}

export const FileService = {
    imageStore,
    fileStore
}