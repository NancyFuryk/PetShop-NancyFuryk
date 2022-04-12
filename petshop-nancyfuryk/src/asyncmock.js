const products = [
    {
        id: 1,
        title: 'Eukanuba Adultos 3kg',
        description: 'Alimento para perros adultos, mordida pequeña',
        price: 2500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_642839-MLA40188831754_122019-O.webp'
    },
    {
        id: 2,
        title: 'Eukanuba Adultos 15kg',
        description: 'Alimento para perros adultos, mordida pequeña',
        price: 3500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_832002-MLA48169192195_112021-O.webp'
    },
    {
        id: 3,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_642839-MLA40188831754_122019-O.webp'
    },
    {
        id: 4,
        title: 'Eukanuba cachorros 15kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 2000,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_832002-MLA48169192195_112021-O.webp'
    },
    {
        id: 3,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_832002-MLA48169192195_112021-O.webp'
    },
    {
        id: 3,
        title: 'Eukanuba cachorros 3kg',
        description: 'Alimento para perros adultos, mordida grande',
        price: 1500,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_832002-MLA48169192195_112021-O.webp'
    }
]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(items => items.id === id))
        }, 2000)
    })
}