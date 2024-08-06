import React, { useEffect, useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredItems, setFilteredItems] = useState([])
  const [itemsToDisplay, setItemsToDisplay] = useState([])
  const [search, setSearch] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }
  useEffect(() => {
    setItemsToDisplay(
      items.filter((item) => {
        if (selectedCategory === 'All') return true
        return item.category === selectedCategory
      })
    )
  }, [items, selectedCategory])

  useEffect(() => {
    if (search !== '') {
      const filtered = itemsToDisplay.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredItems(filtered)
    } else {
      setFilteredItems(itemsToDisplay)
    }
  }, [itemsToDisplay, search])

  const handleNewItem = (e, item) => {
    e.preventDefault()
    setItems([...items, item])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        setSearch={setSearch}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
