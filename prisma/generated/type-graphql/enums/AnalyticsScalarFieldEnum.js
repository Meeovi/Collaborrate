"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AnalyticsScalarFieldEnum;
(function (AnalyticsScalarFieldEnum) {
    AnalyticsScalarFieldEnum["id"] = "id";
    AnalyticsScalarFieldEnum["created_at"] = "created_at";
    AnalyticsScalarFieldEnum["name"] = "name";
    AnalyticsScalarFieldEnum["country"] = "country";
    AnalyticsScalarFieldEnum["share_data"] = "share_data";
    AnalyticsScalarFieldEnum["website_name"] = "website_name";
    AnalyticsScalarFieldEnum["client_id"] = "client_id";
    AnalyticsScalarFieldEnum["client_secret"] = "client_secret";
    AnalyticsScalarFieldEnum["tracking_id"] = "tracking_id";
    AnalyticsScalarFieldEnum["property_name"] = "property_name";
    AnalyticsScalarFieldEnum["url"] = "url";
    AnalyticsScalarFieldEnum["default_view"] = "default_view";
    AnalyticsScalarFieldEnum["category"] = "category";
    AnalyticsScalarFieldEnum["property_hit"] = "property_hit";
    AnalyticsScalarFieldEnum["tracking_code"] = "tracking_code";
    AnalyticsScalarFieldEnum["data_collection"] = "data_collection";
    AnalyticsScalarFieldEnum["data_retention"] = "data_retention";
    AnalyticsScalarFieldEnum["search_analytics"] = "search_analytics";
})(AnalyticsScalarFieldEnum = exports.AnalyticsScalarFieldEnum || (exports.AnalyticsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AnalyticsScalarFieldEnum, {
    name: "AnalyticsScalarFieldEnum",
    description: undefined,
});
