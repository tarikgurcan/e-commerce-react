import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from "./shoppage.data"

export default class ShopPage extends Component {
    state={
        collections:SHOP_DATA
    }
    render() {
        const {collections}=this.state;
        return (
            <div>
               {collections.map(({id,...otherItems})=>
                <CollectionPreview key={id} {...otherItems}/>
               )}
            </div>
        )
    }
}
