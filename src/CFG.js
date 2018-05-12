// @flow
import type {
  ContextFreeGrammar,
  NonTerminalSymbol,
  ProductionRule,
  StartSymbol,
  Symbol,
} from './types'

export default class CFG {
  productionRules: ProductionRule[]
  startSymbols: StartSymbol[]
  addProductionRule: (NonTerminalSymbol, Symbol[]) => void
  generate: () => string

  constructor(
    productionRules: ProductionRule[] = [],
    startSymbols: StartSymbol[] = []
  ) {
    this.productionRules = productionRules
    this.startSymbols = startSymbols
  }

  addProductionRule(x: NonTerminalSymbol, y: Symbol[]) {
    this.productionRules.push([x,y])
  }

  generateRandomSentence(): string {

    return ''
  }

}
