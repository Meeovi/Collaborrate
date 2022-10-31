"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CurrenciesOrderByRelevanceFieldEnum;
(function (CurrenciesOrderByRelevanceFieldEnum) {
    CurrenciesOrderByRelevanceFieldEnum["code"] = "code";
    CurrenciesOrderByRelevanceFieldEnum["name"] = "name";
    CurrenciesOrderByRelevanceFieldEnum["region"] = "region";
    CurrenciesOrderByRelevanceFieldEnum["symbol"] = "symbol";
    CurrenciesOrderByRelevanceFieldEnum["useStandard"] = "useStandard";
})(CurrenciesOrderByRelevanceFieldEnum = exports.CurrenciesOrderByRelevanceFieldEnum || (exports.CurrenciesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CurrenciesOrderByRelevanceFieldEnum, {
    name: "CurrenciesOrderByRelevanceFieldEnum",
    description: undefined,
});
