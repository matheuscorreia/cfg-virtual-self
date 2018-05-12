// @flow
import fs from 'fs'

import CFG from './CFG'
import { productionRules, startSymbols } from './grammar'

const grammar = new CFG(productionRules, startSymbols)

const sentences = new Array(100).fill(null).map(() => grammar.generateRandomSentence());

fs.writeFileSync('sentences', sentences.join('\n'));
