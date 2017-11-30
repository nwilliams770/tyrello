import { connect } from 'react-redux';
import { createList } from '../../../actions/list_actions';

import NewListForm from './new_list_form';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createList: (params) => dispatch(createList(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewListForm);
