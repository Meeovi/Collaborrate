"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaxesScalarFieldEnum;
(function (TaxesScalarFieldEnum) {
    TaxesScalarFieldEnum["id"] = "id";
    TaxesScalarFieldEnum["tax_identifier"] = "tax_identifier";
    TaxesScalarFieldEnum["postcode"] = "postcode";
    TaxesScalarFieldEnum["state"] = "state";
    TaxesScalarFieldEnum["country"] = "country";
    TaxesScalarFieldEnum["rate_percent"] = "rate_percent";
    TaxesScalarFieldEnum["taxDefault"] = "taxDefault";
    TaxesScalarFieldEnum["products"] = "products";
    TaxesScalarFieldEnum["taxRuleName"] = "taxRuleName";
    TaxesScalarFieldEnum["taxCategory"] = "taxCategory";
})(TaxesScalarFieldEnum = exports.TaxesScalarFieldEnum || (exports.TaxesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TaxesScalarFieldEnum, {
    name: "TaxesScalarFieldEnum",
    description: undefined,
});
