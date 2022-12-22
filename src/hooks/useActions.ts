import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreators from '../models/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators, dispatch)
}