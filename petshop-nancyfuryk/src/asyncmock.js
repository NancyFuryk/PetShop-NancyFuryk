const products = [
    {
        id: 1,
        title: 'Eukanuba Adultos 3kg',
        description: 'Alimento para perros adultos, mordida pequeña',
        price: 2500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_642839-MLA40188831754_122019-O.webp',
        category: 'perros'
    },
    {
        id: 2,
        title: 'Eukanuba Adultos 15kg',
        description: 'Alimento para gatos adultos, mordida pequeña',
        price: 3500,
        pictureUrl:'http://guiaverde.com/files/noticia/20121102105848_PKG0914.jpg',
        category: 'gatos'
    },
    {
        id: 3,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_642839-MLA40188831754_122019-O.webp',
        category: 'perros'
    },
    {
        id: 4,
        title: 'Eukanuba cachorros 15kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 2000,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_832002-MLA48169192195_112021-O.webp',
        category: 'perros'
    },
    {
        id: 5,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para gatos adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://media.mundo-animal.com/product/eukanuba-gato-kitten-800x800_JX0aCww.jpg',
        category: 'gatos'
    },
    {
        id: 6,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para gatos adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://media.mundo-animal.com/product/eukanuba-gato-kitten-800x800_JX0aCww.jpg',
        category: 'gatos'
    }
]

const categories = [
    {id: 'perros', description: 'Perros'},
    {id: 'gatos', description: 'Gatos'},
    {id: 'aves', description: 'Aves'},
    {id: 'peces', description: 'Peces'},
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}
