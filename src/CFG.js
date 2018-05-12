// @flow
import type {
  ContextFreeGrammar,
  NonTerminalSymbol,
  ProductionRule,
  StartSymbol,
  Symbol,
} from './types'
import { arrayRandomElement, flattenDeep } from './utils'

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

  getRandomRuleFromSymbol = (s: Symbol): ?ProductionRule => {
    const symbolRules = this.productionRules.filter(ruleTuple => ruleTuple[0] === s);

    return arrayRandomElement(symbolRules);
  }

  isNonTerminalSymbol = (s: Symbol): boolean => this.productionRules.some(ruleTuple => ruleTuple[0] === s)

  generateRandomSentence(): string {
    const { startSymbols, productionRules } = this

    const randomStartSymbol = arrayRandomElement(startSymbols)

    if (!randomStartSymbol)
      throw Error('Array of start symbols seems to be empty. At least one start symbol must be provided');

    const leftMostDerivative = (s: NonTerminalSymbol): any[] => {
      if(!this.isNonTerminalSymbol(s)) {
        // $FlowFixMe
        return s;
      }

      const randomProductionRule: ?ProductionRule = this.getRandomRuleFromSymbol(s);

      if(!randomProductionRule)
        throw Error('Something went wrong');

      const derivatedSymbols: Symbol[] = randomProductionRule[1];

      return derivatedSymbols.map((s: Symbol) => leftMostDerivative(s));
    }

    const symbols = leftMostDerivative(randomStartSymbol);
    
    return flattenDeep(symbols).join(' ')
  }

}
