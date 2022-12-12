"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ArticlesOrderByRelevanceFieldEnum;
(function (ArticlesOrderByRelevanceFieldEnum) {
    ArticlesOrderByRelevanceFieldEnum["name"] = "name";
    ArticlesOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    ArticlesOrderByRelevanceFieldEnum["content"] = "content";
    ArticlesOrderByRelevanceFieldEnum["image"] = "image";
    ArticlesOrderByRelevanceFieldEnum["categories"] = "categories";
    ArticlesOrderByRelevanceFieldEnum["customers"] = "customers";
    ArticlesOrderByRelevanceFieldEnum["users"] = "users";
    ArticlesOrderByRelevanceFieldEnum["published"] = "published";
    ArticlesOrderByRelevanceFieldEnum["cust_id"] = "cust_id";
    ArticlesOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
    ArticlesOrderByRelevanceFieldEnum["meta_description"] = "meta_description";
    ArticlesOrderByRelevanceFieldEnum["meta_name"] = "meta_name";
    ArticlesOrderByRelevanceFieldEnum["meta_url"] = "meta_url";
    ArticlesOrderByRelevanceFieldEnum["tags"] = "tags";
    ArticlesOrderByRelevanceFieldEnum["type"] = "type";
})(ArticlesOrderByRelevanceFieldEnum = exports.ArticlesOrderByRelevanceFieldEnum || (exports.ArticlesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ArticlesOrderByRelevanceFieldEnum, {
    name: "ArticlesOrderByRelevanceFieldEnum",
    description: undefined,
});
