"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NewslettersOrderByRelevanceFieldEnum;
(function (NewslettersOrderByRelevanceFieldEnum) {
    NewslettersOrderByRelevanceFieldEnum["email"] = "email";
    NewslettersOrderByRelevanceFieldEnum["customer_first_name"] = "customer_first_name";
    NewslettersOrderByRelevanceFieldEnum["customer_last_name"] = "customer_last_name";
    NewslettersOrderByRelevanceFieldEnum["store"] = "store";
    NewslettersOrderByRelevanceFieldEnum["status"] = "status";
    NewslettersOrderByRelevanceFieldEnum["websites"] = "websites";
    NewslettersOrderByRelevanceFieldEnum["customers"] = "customers";
})(NewslettersOrderByRelevanceFieldEnum = exports.NewslettersOrderByRelevanceFieldEnum || (exports.NewslettersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(NewslettersOrderByRelevanceFieldEnum, {
    name: "NewslettersOrderByRelevanceFieldEnum",
    description: undefined,
});
