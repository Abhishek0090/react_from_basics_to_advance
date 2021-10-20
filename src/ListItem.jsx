import React from 'react'

const ListItem = (props) => {
    const {item,deleteItem,id} = props

    return (
        <div className="item_div">
        <i className="fas fa-trash-alt icon_div" id="btn" onClick={()=>{
            deleteItem(id)
        }}></i>
        <li>{item}</li>
        </div>
    )
}

export default ListItem
