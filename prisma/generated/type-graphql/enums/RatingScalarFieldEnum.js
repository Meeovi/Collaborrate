"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RatingScalarFieldEnum;
(function (RatingScalarFieldEnum) {
    RatingScalarFieldEnum["id"] = "id";
    RatingScalarFieldEnum["default_value"] = "default_value";
    RatingScalarFieldEnum["default_store_view"] = "default_store_view";
    RatingScalarFieldEnum["rating_visibility"] = "rating_visibility";
    RatingScalarFieldEnum["active"] = "active";
    RatingScalarFieldEnum["sort_order"] = "sort_order";
    RatingScalarFieldEnum["prod_id"] = "prod_id";
    RatingScalarFieldEnum["products"] = "products";
})(RatingScalarFieldEnum = exports.RatingScalarFieldEnum || (exports.RatingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RatingScalarFieldEnum, {
    name: "RatingScalarFieldEnum",
    description: undefined,
});
