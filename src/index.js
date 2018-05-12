// @flow

import CFG from './CFG'
import { productionRules, startSymbols } from './grammar'

const grammar = new CFG(productionRules, startSymbols)

const randomSentence = grammar.generateRandomSentence();

console.log(randomSentence)
