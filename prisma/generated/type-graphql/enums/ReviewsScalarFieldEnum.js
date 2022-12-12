"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReviewsScalarFieldEnum;
(function (ReviewsScalarFieldEnum) {
    ReviewsScalarFieldEnum["id"] = "id";
    ReviewsScalarFieldEnum["first_name"] = "first_name";
    ReviewsScalarFieldEnum["last_name"] = "last_name";
    ReviewsScalarFieldEnum["content"] = "content";
    ReviewsScalarFieldEnum["websites"] = "websites";
    ReviewsScalarFieldEnum["created_at"] = "created_at";
})(ReviewsScalarFieldEnum = exports.ReviewsScalarFieldEnum || (exports.ReviewsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReviewsScalarFieldEnum, {
    name: "ReviewsScalarFieldEnum",
    description: undefined,
});
