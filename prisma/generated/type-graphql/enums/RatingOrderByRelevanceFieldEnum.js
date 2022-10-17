"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RatingOrderByRelevanceFieldEnum;
(function (RatingOrderByRelevanceFieldEnum) {
    RatingOrderByRelevanceFieldEnum["default_value"] = "default_value";
    RatingOrderByRelevanceFieldEnum["default_store_view"] = "default_store_view";
    RatingOrderByRelevanceFieldEnum["rating_visibility"] = "rating_visibility";
    RatingOrderByRelevanceFieldEnum["products"] = "products";
})(RatingOrderByRelevanceFieldEnum = exports.RatingOrderByRelevanceFieldEnum || (exports.RatingOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(RatingOrderByRelevanceFieldEnum, {
    name: "RatingOrderByRelevanceFieldEnum",
    description: undefined,
});
