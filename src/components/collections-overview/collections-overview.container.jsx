import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import { WithSpinner } from '../withspinner/withspinner.component';
import collectionsOverviewComponent from './../collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOvervViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverviewComponent);

export default CollectionOvervViewContainer;