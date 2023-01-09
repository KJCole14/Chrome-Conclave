import React from 'react'


export default function Product(props) {
  return (
      <div>
      <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
        <tbody id="output-data"><img src={props.img} className='productImage' alt='img' /></tbody>
    </table>
    </div>
  )
}
