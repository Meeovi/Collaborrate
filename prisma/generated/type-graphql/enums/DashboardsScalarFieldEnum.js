"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DashboardsScalarFieldEnum;
(function (DashboardsScalarFieldEnum) {
    DashboardsScalarFieldEnum["id"] = "id";
    DashboardsScalarFieldEnum["created_at"] = "created_at";
    DashboardsScalarFieldEnum["name"] = "name";
    DashboardsScalarFieldEnum["client_id"] = "client_id";
    DashboardsScalarFieldEnum["client_secret"] = "client_secret";
    DashboardsScalarFieldEnum["privacy"] = "privacy";
    DashboardsScalarFieldEnum["category"] = "category";
    DashboardsScalarFieldEnum["url"] = "url";
    DashboardsScalarFieldEnum["media"] = "media";
    DashboardsScalarFieldEnum["reports"] = "reports";
    DashboardsScalarFieldEnum["tasks"] = "tasks";
    DashboardsScalarFieldEnum["projects"] = "projects";
    DashboardsScalarFieldEnum["tickets"] = "tickets";
    DashboardsScalarFieldEnum["customers"] = "customers";
    DashboardsScalarFieldEnum["checklists"] = "checklists";
    DashboardsScalarFieldEnum["visits"] = "visits";
    DashboardsScalarFieldEnum["users"] = "users";
    DashboardsScalarFieldEnum["products"] = "products";
    DashboardsScalarFieldEnum["articles"] = "articles";
    DashboardsScalarFieldEnum["sales"] = "sales";
    DashboardsScalarFieldEnum["logo"] = "logo";
    DashboardsScalarFieldEnum["content"] = "content";
    DashboardsScalarFieldEnum["published"] = "published";
})(DashboardsScalarFieldEnum = exports.DashboardsScalarFieldEnum || (exports.DashboardsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DashboardsScalarFieldEnum, {
    name: "DashboardsScalarFieldEnum",
    description: undefined,
});
