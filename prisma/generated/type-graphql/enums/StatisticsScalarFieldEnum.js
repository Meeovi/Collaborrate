"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StatisticsScalarFieldEnum;
(function (StatisticsScalarFieldEnum) {
    StatisticsScalarFieldEnum["id"] = "id";
    StatisticsScalarFieldEnum["name"] = "name";
    StatisticsScalarFieldEnum["excerpt"] = "excerpt";
    StatisticsScalarFieldEnum["description"] = "description";
    StatisticsScalarFieldEnum["image"] = "image";
    StatisticsScalarFieldEnum["published"] = "published";
    StatisticsScalarFieldEnum["special_offers"] = "special_offers";
    StatisticsScalarFieldEnum["reports"] = "reports";
    StatisticsScalarFieldEnum["rewards"] = "rewards";
    StatisticsScalarFieldEnum["coupons"] = "coupons";
    StatisticsScalarFieldEnum["expiration"] = "expiration";
    StatisticsScalarFieldEnum["categories"] = "categories";
    StatisticsScalarFieldEnum["articles"] = "articles";
    StatisticsScalarFieldEnum["products"] = "products";
    StatisticsScalarFieldEnum["customers"] = "customers";
    StatisticsScalarFieldEnum["users"] = "users";
})(StatisticsScalarFieldEnum = exports.StatisticsScalarFieldEnum || (exports.StatisticsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StatisticsScalarFieldEnum, {
    name: "StatisticsScalarFieldEnum",
    description: undefined,
});
