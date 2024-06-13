import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem ({name, href, backgroundColor, color}) {
    const  style ={
        backgroundColor: backgroundColor,
        color: color,
        boderColor: color
    }
    return (
        <div>
            <Link to={href} className='roundede-full'>
                <div className='px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}

function CategoryList () {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="SHOPPING" href="/categories/SHOPPING" backgroundColor="#FFA9A9" color="#1E1D30" />
            <CategoryItem name="TRANSPORTATION" href="/categories/TRANSPORTATION" backgroundColor="#FFD8A9" color="#1E1D30" />
            <CategoryItem name="FOOD" href="/categories/FOOD" backgroundColor="#D4FFA9" color="#1E1D30" />
            <CategoryItem name="HEALTH" href="/categories/HEALTH" backgroundColor="#A9FFD1" color="#1E1D30" />
            <CategoryItem name="FESTIVAL" href="/categories/FESTIVAL" backgroundColor="#A9F0FF" color="#1E1D30" />
            <CategoryItem name="LIFESTYLE" href="/categories/LIFESTYLE" backgroundColor="#A9BCFF" color="#1E1D30" />
        </div>
    )
}

const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList />
    </div>
  )
}

export default CategoryWrapper