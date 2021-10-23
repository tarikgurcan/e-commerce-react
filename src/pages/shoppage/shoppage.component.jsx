import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../components/collections/collection.component';
import CollectionOverview from "../../components/collections-overview/collections-overview.component"
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions"
import { connect } from 'react-redux';
import { WithSpinner } from '../../components/withspinner/withspinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  
  }

 render(){
  const { match, isCollectionFetching,isCollectionLoaded} = this.props
   return(
    <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isloading={isCollectionFetching} {...props} />} />
    <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isloading={!isCollectionLoaded} {...props} />} />
  </div>
   )
 }

}

const mapStateToProps=createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching,
  isCollectionLoaded:selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);