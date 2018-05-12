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
  addProductionRule: (NonTerminalSymbol, Symbol[]) => void
  generate: () => string

  constructor({
    productionRules = [],
  }: ContextFreeGrammar) {
    this.productionRules = productionRules
  }

  addProductionRule(x: NonTerminalSymbol, y: Symbol[]) {
    this.productionRules.push([x,y])
  }

  generateRandomSentence(): string {
    return ''
  }

}
