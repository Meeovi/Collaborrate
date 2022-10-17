"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tax_rateOrderByRelevanceFieldEnum;
(function (Tax_rateOrderByRelevanceFieldEnum) {
    Tax_rateOrderByRelevanceFieldEnum["tax_identifier"] = "tax_identifier";
    Tax_rateOrderByRelevanceFieldEnum["postcode"] = "postcode";
    Tax_rateOrderByRelevanceFieldEnum["state"] = "state";
    Tax_rateOrderByRelevanceFieldEnum["country"] = "country";
    Tax_rateOrderByRelevanceFieldEnum["rate_percent"] = "rate_percent";
    Tax_rateOrderByRelevanceFieldEnum["default_store_view"] = "default_store_view";
    Tax_rateOrderByRelevanceFieldEnum["products"] = "products";
})(Tax_rateOrderByRelevanceFieldEnum = exports.Tax_rateOrderByRelevanceFieldEnum || (exports.Tax_rateOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Tax_rateOrderByRelevanceFieldEnum, {
    name: "Tax_rateOrderByRelevanceFieldEnum",
    description: undefined,
});
