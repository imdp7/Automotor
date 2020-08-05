 const fetchItems = async page => {
    const items = await (
        await fetch(`http://localhost:4000/products?_limit=50`)
    ).json();
    console.log({items});
    return items;
};
// export const searchItems = async page =>{
//     const Sitems = await (
//         await fetch(`http://localhost:4000/products?q=${query}`)
//     ).json();
//     console.log({Sitems});
//     return Sitems;
// }

export default fetchItems;
