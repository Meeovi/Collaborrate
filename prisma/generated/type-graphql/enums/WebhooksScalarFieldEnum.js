"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WebhooksScalarFieldEnum;
(function (WebhooksScalarFieldEnum) {
    WebhooksScalarFieldEnum["id"] = "id";
    WebhooksScalarFieldEnum["created_at"] = "created_at";
    WebhooksScalarFieldEnum["name"] = "name";
    WebhooksScalarFieldEnum["url"] = "url";
    WebhooksScalarFieldEnum["headers"] = "headers";
    WebhooksScalarFieldEnum["create"] = "create";
    WebhooksScalarFieldEnum["retrieve"] = "retrieve";
    WebhooksScalarFieldEnum["update"] = "update";
    WebhooksScalarFieldEnum["delete"] = "delete";
    WebhooksScalarFieldEnum["publish"] = "publish";
    WebhooksScalarFieldEnum["unpublish"] = "unpublish";
})(WebhooksScalarFieldEnum = exports.WebhooksScalarFieldEnum || (exports.WebhooksScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WebhooksScalarFieldEnum, {
    name: "WebhooksScalarFieldEnum",
    description: undefined,
});
