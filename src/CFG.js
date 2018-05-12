// @flow
import type {
  NonTerminalSymbol,
  TerminalSymbol,
  ProductionRule,
  StartSymbol,
  Symbol,
} from './types'

class CFG {
  terminalSymbols: TerminalSymbol[]
  nonTerminalSymbols: NonTerminalSymbol[]
  productionRules: [NonTerminalSymbol, Symbol[]][]
  startSymbols: NonTerminalSymbol[]
  addNonTerminalSymbol: (NonTerminalSymbol, Symbol[]) => void
  addTerminalSymbol: (NonTerminalSymbol, Symbol[]) => void
  addStartSymbol: (NonTerminalSymbol, Symbol[]) => void
  addProductionRule: (NonTerminalSymbol, Symbol[]) => void
  generate: () => string

  constructor({
    terminalSymbols = [],
    nonTerminalSymbols = [],
    productionRules = [],
    startSymbols = [],
  }) {
    this.terminalSymbols = terminalSymbols
    this.nonTerminalSymbols = nonTerminalSymbols
    this.productionRules = productionRules
    this.startSymbols = startSymbols
  }

  addTerminalSymbol(x: TerminalSymbol | TerminalSymbol[]) {
    if (Array.isArray(x)) {
      this.terminalSymbols.push(...x);
    } else {
      this.terminalSymbols.push(x)
    }
  }

  addNonTerminalSymbol(x: NonTerminalSymbol | NonTerminalSymbol[]) {
    if (Array.isArray(x)) {
      this.nonTerminalSymbols.push(...x);
    } else {
      this.nonTerminalSymbols.push(x)
    }
  }

  addStartSymbol(x: StartSymbol | StartSymbol[]) {
    if (Array.isArray(x)) {
      this.nonTerminalSymbols.push(...x);
    } else {
      this.nonTerminalSymbols.push(x)
    }
  }

  addProductionRule(x: NonTerminalSymbol, y: Symbol[]) {
    this.productionRules.push([x,y])
  }

  generateRandomSentence(): string {
    return ''
  }

}
