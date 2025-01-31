import langFr from '../assets/lang/fr.json';

const __ = (key) => {
    return (key in langFr) ? langFr[key] : key;
}

const getExcerpt = (text, length = 180) => {
    if (!text) return '';
    if (text.length <= length) return text;

    return text.substring(0, length).concat('...');
}

export const String = {
    __,
    getExcerpt,
}