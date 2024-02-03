import { useEffect, useState } from 'react';
import { getListCategory } from '../api'

const CategoriesBar = ({ selectedCategory }) => {
    const [getCategories, setCategory] = useState([])

    useEffect(() => {
        getListCategory().then((result) => {
            setCategory(result)
        })

        console.log(selectedCategory)
    }, [])

    // const handleOnClick = (categoryId) => {
    //     const onSelectCategory = categoryId
    // }
    
    const CategoryList = () => {
        return getCategories.map((category, i) => (   
            <li key={i} className="hover:bg-blue-200"><a onClick={() => selectedCategory(category.id)}>{category.nama}</a></li>        
        ))
    }

    return (
        <div className="bg-gray-800 w-1/5">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-neutral-content border-b border-white-400 pb-2">Daftar Kategori</h1>
                <ul className="menu bg-gray-800 w-56 p-0 [&_li>*]:rounded-none text-white">
                    <CategoryList/>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesBar;