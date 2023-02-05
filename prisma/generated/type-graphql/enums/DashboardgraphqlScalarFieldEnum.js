"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DashboardgraphqlScalarFieldEnum;
(function (DashboardgraphqlScalarFieldEnum) {
    DashboardgraphqlScalarFieldEnum["id"] = "id";
    DashboardgraphqlScalarFieldEnum["name"] = "name";
    DashboardgraphqlScalarFieldEnum["url"] = "url";
    DashboardgraphqlScalarFieldEnum["headerValue"] = "headerValue";
    DashboardgraphqlScalarFieldEnum["headerKey"] = "headerKey";
    DashboardgraphqlScalarFieldEnum["urlValue"] = "urlValue";
    DashboardgraphqlScalarFieldEnum["urlKey"] = "urlKey";
    DashboardgraphqlScalarFieldEnum["description"] = "description";
})(DashboardgraphqlScalarFieldEnum = exports.DashboardgraphqlScalarFieldEnum || (exports.DashboardgraphqlScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DashboardgraphqlScalarFieldEnum, {
    name: "DashboardgraphqlScalarFieldEnum",
    description: undefined,
});
