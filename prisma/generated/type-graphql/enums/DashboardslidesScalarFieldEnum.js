"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DashboardslidesScalarFieldEnum;
(function (DashboardslidesScalarFieldEnum) {
    DashboardslidesScalarFieldEnum["id"] = "id";
    DashboardslidesScalarFieldEnum["name"] = "name";
    DashboardslidesScalarFieldEnum["categories"] = "categories";
    DashboardslidesScalarFieldEnum["media"] = "media";
    DashboardslidesScalarFieldEnum["description"] = "description";
})(DashboardslidesScalarFieldEnum = exports.DashboardslidesScalarFieldEnum || (exports.DashboardslidesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DashboardslidesScalarFieldEnum, {
    name: "DashboardslidesScalarFieldEnum",
    description: undefined,
});
