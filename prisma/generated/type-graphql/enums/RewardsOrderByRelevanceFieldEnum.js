"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RewardsOrderByRelevanceFieldEnum;
(function (RewardsOrderByRelevanceFieldEnum) {
    RewardsOrderByRelevanceFieldEnum["name"] = "name";
    RewardsOrderByRelevanceFieldEnum["slug"] = "slug";
    RewardsOrderByRelevanceFieldEnum["level"] = "level";
    RewardsOrderByRelevanceFieldEnum["coupons"] = "coupons";
    RewardsOrderByRelevanceFieldEnum["expiration"] = "expiration";
    RewardsOrderByRelevanceFieldEnum["categories"] = "categories";
    RewardsOrderByRelevanceFieldEnum["articles"] = "articles";
    RewardsOrderByRelevanceFieldEnum["products"] = "products";
    RewardsOrderByRelevanceFieldEnum["customers"] = "customers";
    RewardsOrderByRelevanceFieldEnum["users"] = "users";
})(RewardsOrderByRelevanceFieldEnum = exports.RewardsOrderByRelevanceFieldEnum || (exports.RewardsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(RewardsOrderByRelevanceFieldEnum, {
    name: "RewardsOrderByRelevanceFieldEnum",
    description: undefined,
});
