"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CurrenciesScalarFieldEnum;
(function (CurrenciesScalarFieldEnum) {
    CurrenciesScalarFieldEnum["id"] = "id";
    CurrenciesScalarFieldEnum["created_at"] = "created_at";
    CurrenciesScalarFieldEnum["code"] = "code";
    CurrenciesScalarFieldEnum["name"] = "name";
    CurrenciesScalarFieldEnum["region"] = "region";
    CurrenciesScalarFieldEnum["symbol"] = "symbol";
    CurrenciesScalarFieldEnum["useStandard"] = "useStandard";
})(CurrenciesScalarFieldEnum = exports.CurrenciesScalarFieldEnum || (exports.CurrenciesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CurrenciesScalarFieldEnum, {
    name: "CurrenciesScalarFieldEnum",
    description: undefined,
});
