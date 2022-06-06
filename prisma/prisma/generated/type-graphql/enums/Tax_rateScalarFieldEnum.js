"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tax_rateScalarFieldEnum;
(function (Tax_rateScalarFieldEnum) {
    Tax_rateScalarFieldEnum["id"] = "id";
    Tax_rateScalarFieldEnum["tax_identifier"] = "tax_identifier";
    Tax_rateScalarFieldEnum["zip_post_is_range"] = "zip_post_is_range";
    Tax_rateScalarFieldEnum["postcode"] = "postcode";
    Tax_rateScalarFieldEnum["state"] = "state";
    Tax_rateScalarFieldEnum["country"] = "country";
    Tax_rateScalarFieldEnum["rate_percent"] = "rate_percent";
    Tax_rateScalarFieldEnum["default_store_view"] = "default_store_view";
    Tax_rateScalarFieldEnum["prod_id"] = "prod_id";
})(Tax_rateScalarFieldEnum = exports.Tax_rateScalarFieldEnum || (exports.Tax_rateScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Tax_rateScalarFieldEnum, {
    name: "Tax_rateScalarFieldEnum",
    description: undefined,
});
