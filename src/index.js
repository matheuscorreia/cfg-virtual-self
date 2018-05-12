// @flow

import CFG from './CFG'
import { productionRules } from './grammar'

const grammar = new CFG(productionRules)

console.log(grammar)
