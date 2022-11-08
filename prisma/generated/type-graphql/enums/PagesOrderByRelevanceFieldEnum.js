"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PagesOrderByRelevanceFieldEnum;
(function (PagesOrderByRelevanceFieldEnum) {
    PagesOrderByRelevanceFieldEnum["title"] = "title";
    PagesOrderByRelevanceFieldEnum["content_title"] = "content_title";
    PagesOrderByRelevanceFieldEnum["content"] = "content";
    PagesOrderByRelevanceFieldEnum["url_key"] = "url_key";
    PagesOrderByRelevanceFieldEnum["meta_title"] = "meta_title";
    PagesOrderByRelevanceFieldEnum["meta_keywords"] = "meta_keywords";
    PagesOrderByRelevanceFieldEnum["meta_description"] = "meta_description";
})(PagesOrderByRelevanceFieldEnum = exports.PagesOrderByRelevanceFieldEnum || (exports.PagesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PagesOrderByRelevanceFieldEnum, {
    name: "PagesOrderByRelevanceFieldEnum",
    description: undefined,
});
