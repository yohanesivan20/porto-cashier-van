import { useEffect, useState } from 'react';
import { getListMenu } from '../api'

const ListMenu = ({ selectedCategory }) => {
    const [getMenus, setMenu] = useState([])

    useEffect(() => {
        getListMenu().then((result) => {
            setMenu(result)
        })
    }, [selectedCategory])

    const MenuList = () => {
        return getMenus.map((menu, i) => (
            <>
            {menu.category.id == selectedCategory ? (
            <div key={i} className="card w-52 bg-base-100 shadow-xl overflow-hidden">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <h3 className="card-title">{menu.nama}</h3>
                    <p>Price : {menu.harga}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            ): (
                <></>
            )}
            </>
        ))
    }

    return (
        <div className="bg-base-300 w-2/3">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-base-content border-b border-gray-400 pb-2 mb-2">Daftar Menu</h1>
                {/* Card For Menu */}
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <MenuList/>
                </div>
                {/* End Card For Menu */}
            </div>
        </div>
    )
}

export default ListMenu;