"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IntegrationsOrderByRelevanceFieldEnum;
(function (IntegrationsOrderByRelevanceFieldEnum) {
    IntegrationsOrderByRelevanceFieldEnum["name"] = "name";
    IntegrationsOrderByRelevanceFieldEnum["content"] = "content";
    IntegrationsOrderByRelevanceFieldEnum["media"] = "media";
    IntegrationsOrderByRelevanceFieldEnum["location"] = "location";
    IntegrationsOrderByRelevanceFieldEnum["category"] = "category";
})(IntegrationsOrderByRelevanceFieldEnum = exports.IntegrationsOrderByRelevanceFieldEnum || (exports.IntegrationsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(IntegrationsOrderByRelevanceFieldEnum, {
    name: "IntegrationsOrderByRelevanceFieldEnum",
    description: undefined,
});
