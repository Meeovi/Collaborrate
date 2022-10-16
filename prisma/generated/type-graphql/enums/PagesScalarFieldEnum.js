"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PagesScalarFieldEnum;
(function (PagesScalarFieldEnum) {
    PagesScalarFieldEnum["id"] = "id";
    PagesScalarFieldEnum["enable_page"] = "enable_page";
    PagesScalarFieldEnum["title"] = "title";
    PagesScalarFieldEnum["content_title"] = "content_title";
    PagesScalarFieldEnum["content"] = "content";
    PagesScalarFieldEnum["url_key"] = "url_key";
    PagesScalarFieldEnum["meta_title"] = "meta_title";
    PagesScalarFieldEnum["meta_keywords"] = "meta_keywords";
    PagesScalarFieldEnum["meta_description"] = "meta_description";
})(PagesScalarFieldEnum = exports.PagesScalarFieldEnum || (exports.PagesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PagesScalarFieldEnum, {
    name: "PagesScalarFieldEnum",
    description: undefined,
});
