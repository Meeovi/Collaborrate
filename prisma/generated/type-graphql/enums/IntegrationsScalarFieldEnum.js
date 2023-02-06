"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IntegrationsScalarFieldEnum;
(function (IntegrationsScalarFieldEnum) {
    IntegrationsScalarFieldEnum["id"] = "id";
    IntegrationsScalarFieldEnum["created_at"] = "created_at";
    IntegrationsScalarFieldEnum["name"] = "name";
    IntegrationsScalarFieldEnum["content"] = "content";
    IntegrationsScalarFieldEnum["media"] = "media";
    IntegrationsScalarFieldEnum["location"] = "location";
    IntegrationsScalarFieldEnum["category"] = "category";
})(IntegrationsScalarFieldEnum = exports.IntegrationsScalarFieldEnum || (exports.IntegrationsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IntegrationsScalarFieldEnum, {
    name: "IntegrationsScalarFieldEnum",
    description: undefined,
});
