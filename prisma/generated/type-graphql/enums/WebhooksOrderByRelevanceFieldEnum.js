"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WebhooksOrderByRelevanceFieldEnum;
(function (WebhooksOrderByRelevanceFieldEnum) {
    WebhooksOrderByRelevanceFieldEnum["name"] = "name";
    WebhooksOrderByRelevanceFieldEnum["url"] = "url";
    WebhooksOrderByRelevanceFieldEnum["headers"] = "headers";
    WebhooksOrderByRelevanceFieldEnum["create"] = "create";
    WebhooksOrderByRelevanceFieldEnum["retrieve"] = "retrieve";
    WebhooksOrderByRelevanceFieldEnum["update"] = "update";
    WebhooksOrderByRelevanceFieldEnum["delete"] = "delete";
    WebhooksOrderByRelevanceFieldEnum["publish"] = "publish";
    WebhooksOrderByRelevanceFieldEnum["unpublish"] = "unpublish";
})(WebhooksOrderByRelevanceFieldEnum = exports.WebhooksOrderByRelevanceFieldEnum || (exports.WebhooksOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(WebhooksOrderByRelevanceFieldEnum, {
    name: "WebhooksOrderByRelevanceFieldEnum",
    description: undefined,
});
