import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as action from "../redux/action";
import Main from "../components/Main";

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators(action , dispatch);
 }
const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
