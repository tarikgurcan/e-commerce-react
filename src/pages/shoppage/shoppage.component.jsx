import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../components/collections/collection.component';
import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import {updateCollections} from "../../redux/shop/shop.actions"
import { connect } from 'react-redux';
import { WithSpinner } from '../../components/withspinner/withspinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {

  state={
    loading:true
  }

  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef = firestore.collection("collections")


    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({loading:false})
    })
  
  }

 render(){
  const { match} = this.props
  const {loading} = this.state
   return(
    <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isloading={loading} {...props} />} />
    <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isloading={loading} {...props} />} />
  </div>
   )
 }

}

const mapDispatchToProps = dispatch =>({
  updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);