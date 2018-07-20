import { combineReducers } from 'redux';
import CompaniesReducer from './reducer_companies';

import ActiveCompany from './reducer_active_company';

const rootReducer = combineReducers({
    companies: CompaniesReducer,
    activeCompany: ActiveCompany
})

export default rootReducer;