"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ArticlesScalarFieldEnum;
(function (ArticlesScalarFieldEnum) {
    ArticlesScalarFieldEnum["id"] = "id";
    ArticlesScalarFieldEnum["name"] = "name";
    ArticlesScalarFieldEnum["excerpt"] = "excerpt";
    ArticlesScalarFieldEnum["content"] = "content";
    ArticlesScalarFieldEnum["image"] = "image";
    ArticlesScalarFieldEnum["categories"] = "categories";
    ArticlesScalarFieldEnum["customers"] = "customers";
    ArticlesScalarFieldEnum["users"] = "users";
    ArticlesScalarFieldEnum["published"] = "published";
    ArticlesScalarFieldEnum["cust_id"] = "cust_id";
})(ArticlesScalarFieldEnum = exports.ArticlesScalarFieldEnum || (exports.ArticlesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ArticlesScalarFieldEnum, {
    name: "ArticlesScalarFieldEnum",
    description: undefined,
});
