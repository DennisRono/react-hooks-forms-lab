import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function ItemForm(props) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: '',
    category: 'Produce',
  })

  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        props.onItemFormSubmit(e, formData)
        setFormData({ name: '', category: 'Produce' })
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )
}

export default ItemForm
