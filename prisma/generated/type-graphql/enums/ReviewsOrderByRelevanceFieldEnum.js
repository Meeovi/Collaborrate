"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReviewsOrderByRelevanceFieldEnum;
(function (ReviewsOrderByRelevanceFieldEnum) {
    ReviewsOrderByRelevanceFieldEnum["first_name"] = "first_name";
    ReviewsOrderByRelevanceFieldEnum["last_name"] = "last_name";
    ReviewsOrderByRelevanceFieldEnum["content"] = "content";
    ReviewsOrderByRelevanceFieldEnum["websites"] = "websites";
})(ReviewsOrderByRelevanceFieldEnum = exports.ReviewsOrderByRelevanceFieldEnum || (exports.ReviewsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ReviewsOrderByRelevanceFieldEnum, {
    name: "ReviewsOrderByRelevanceFieldEnum",
    description: undefined,
});
