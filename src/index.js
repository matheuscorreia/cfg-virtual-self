// @flow

import CFG from './CFG'
import { productionRules, startSymbols } from './grammar'

const grammar = new CFG(productionRules, startSymbols)

console.log(grammar)
