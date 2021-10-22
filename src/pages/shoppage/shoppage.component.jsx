import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../components/collections/collection.component';
import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import { convertCollectionSnapshopToMap, firestore } from '../../firebase/firebase.utils';
import {updateCollections} from "../../redux/shop/shop.actions"
import { connect } from 'react-redux';


class ShopPage extends Component {

  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef = firestore.collection("collections")
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshopToMap(snapshot)
      updateCollections(collectionMap)
    })
  }

 render(){
  const { match} = this.props
   return(
    <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
   )
 }

}

const mapDispatchToProps = dispatch =>({
  updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);