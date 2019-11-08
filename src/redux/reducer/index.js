import { combineReducers } from 'redux'

import user from './user'
import job from './job'
import company from './company'
import category from './category'

const appReducer = combineReducers({ user, job, company, category })

export default appReducer
