"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StatisticsOrderByRelevanceFieldEnum;
(function (StatisticsOrderByRelevanceFieldEnum) {
    StatisticsOrderByRelevanceFieldEnum["name"] = "name";
    StatisticsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    StatisticsOrderByRelevanceFieldEnum["description"] = "description";
    StatisticsOrderByRelevanceFieldEnum["image"] = "image";
    StatisticsOrderByRelevanceFieldEnum["special_offers"] = "special_offers";
    StatisticsOrderByRelevanceFieldEnum["reports"] = "reports";
    StatisticsOrderByRelevanceFieldEnum["rewards"] = "rewards";
    StatisticsOrderByRelevanceFieldEnum["coupons"] = "coupons";
    StatisticsOrderByRelevanceFieldEnum["categories"] = "categories";
    StatisticsOrderByRelevanceFieldEnum["articles"] = "articles";
    StatisticsOrderByRelevanceFieldEnum["products"] = "products";
    StatisticsOrderByRelevanceFieldEnum["customers"] = "customers";
    StatisticsOrderByRelevanceFieldEnum["users"] = "users";
})(StatisticsOrderByRelevanceFieldEnum = exports.StatisticsOrderByRelevanceFieldEnum || (exports.StatisticsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(StatisticsOrderByRelevanceFieldEnum, {
    name: "StatisticsOrderByRelevanceFieldEnum",
    description: undefined,
});
