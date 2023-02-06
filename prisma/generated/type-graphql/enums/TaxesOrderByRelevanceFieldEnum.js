"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaxesOrderByRelevanceFieldEnum;
(function (TaxesOrderByRelevanceFieldEnum) {
    TaxesOrderByRelevanceFieldEnum["tax_identifier"] = "tax_identifier";
    TaxesOrderByRelevanceFieldEnum["postcode"] = "postcode";
    TaxesOrderByRelevanceFieldEnum["state"] = "state";
    TaxesOrderByRelevanceFieldEnum["country"] = "country";
    TaxesOrderByRelevanceFieldEnum["rate_percent"] = "rate_percent";
    TaxesOrderByRelevanceFieldEnum["taxDefault"] = "taxDefault";
    TaxesOrderByRelevanceFieldEnum["products"] = "products";
    TaxesOrderByRelevanceFieldEnum["taxRuleName"] = "taxRuleName";
    TaxesOrderByRelevanceFieldEnum["taxCategory"] = "taxCategory";
})(TaxesOrderByRelevanceFieldEnum = exports.TaxesOrderByRelevanceFieldEnum || (exports.TaxesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TaxesOrderByRelevanceFieldEnum, {
    name: "TaxesOrderByRelevanceFieldEnum",
    description: undefined,
});
