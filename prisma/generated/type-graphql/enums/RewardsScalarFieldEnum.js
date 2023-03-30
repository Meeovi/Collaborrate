"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RewardsScalarFieldEnum;
(function (RewardsScalarFieldEnum) {
    RewardsScalarFieldEnum["id"] = "id";
    RewardsScalarFieldEnum["name"] = "name";
    RewardsScalarFieldEnum["slug"] = "slug";
    RewardsScalarFieldEnum["level"] = "level";
    RewardsScalarFieldEnum["created_at"] = "created_at";
    RewardsScalarFieldEnum["coupons"] = "coupons";
    RewardsScalarFieldEnum["expiration"] = "expiration";
    RewardsScalarFieldEnum["categories"] = "categories";
    RewardsScalarFieldEnum["articles"] = "articles";
    RewardsScalarFieldEnum["products"] = "products";
    RewardsScalarFieldEnum["customers"] = "customers";
    RewardsScalarFieldEnum["users"] = "users";
})(RewardsScalarFieldEnum = exports.RewardsScalarFieldEnum || (exports.RewardsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RewardsScalarFieldEnum, {
    name: "RewardsScalarFieldEnum",
    description: undefined,
});
