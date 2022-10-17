"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DashboardsOrderByRelevanceFieldEnum;
(function (DashboardsOrderByRelevanceFieldEnum) {
    DashboardsOrderByRelevanceFieldEnum["name"] = "name";
    DashboardsOrderByRelevanceFieldEnum["client_id"] = "client_id";
    DashboardsOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
    DashboardsOrderByRelevanceFieldEnum["privacy"] = "privacy";
    DashboardsOrderByRelevanceFieldEnum["category"] = "category";
    DashboardsOrderByRelevanceFieldEnum["url"] = "url";
    DashboardsOrderByRelevanceFieldEnum["media"] = "media";
    DashboardsOrderByRelevanceFieldEnum["reports"] = "reports";
    DashboardsOrderByRelevanceFieldEnum["tasks"] = "tasks";
    DashboardsOrderByRelevanceFieldEnum["projects"] = "projects";
    DashboardsOrderByRelevanceFieldEnum["tickets"] = "tickets";
    DashboardsOrderByRelevanceFieldEnum["customers"] = "customers";
    DashboardsOrderByRelevanceFieldEnum["checklists"] = "checklists";
    DashboardsOrderByRelevanceFieldEnum["visits"] = "visits";
    DashboardsOrderByRelevanceFieldEnum["users"] = "users";
    DashboardsOrderByRelevanceFieldEnum["products"] = "products";
    DashboardsOrderByRelevanceFieldEnum["articles"] = "articles";
    DashboardsOrderByRelevanceFieldEnum["sales"] = "sales";
    DashboardsOrderByRelevanceFieldEnum["logo"] = "logo";
    DashboardsOrderByRelevanceFieldEnum["content"] = "content";
    DashboardsOrderByRelevanceFieldEnum["published"] = "published";
})(DashboardsOrderByRelevanceFieldEnum = exports.DashboardsOrderByRelevanceFieldEnum || (exports.DashboardsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(DashboardsOrderByRelevanceFieldEnum, {
    name: "DashboardsOrderByRelevanceFieldEnum",
    description: undefined,
});
