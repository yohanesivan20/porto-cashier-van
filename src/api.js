import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL

export const getListCategory = async() => {
    const category = await axios.get(
        `${baseUrl}/categories.json`
    )

    return category.data.data;
}

export const getListMenu = async() => {
    const menu = await axios.get(
        `${baseUrl}/products.json`
    )

    return menu.data.data;
}