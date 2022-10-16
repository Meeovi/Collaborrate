"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AnalyticsOrderByRelevanceFieldEnum;
(function (AnalyticsOrderByRelevanceFieldEnum) {
    AnalyticsOrderByRelevanceFieldEnum["name"] = "name";
    AnalyticsOrderByRelevanceFieldEnum["country"] = "country";
    AnalyticsOrderByRelevanceFieldEnum["share_data"] = "share_data";
    AnalyticsOrderByRelevanceFieldEnum["website_name"] = "website_name";
    AnalyticsOrderByRelevanceFieldEnum["client_id"] = "client_id";
    AnalyticsOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
    AnalyticsOrderByRelevanceFieldEnum["tracking_id"] = "tracking_id";
    AnalyticsOrderByRelevanceFieldEnum["property_name"] = "property_name";
    AnalyticsOrderByRelevanceFieldEnum["url"] = "url";
    AnalyticsOrderByRelevanceFieldEnum["default_view"] = "default_view";
    AnalyticsOrderByRelevanceFieldEnum["category"] = "category";
    AnalyticsOrderByRelevanceFieldEnum["property_hit"] = "property_hit";
    AnalyticsOrderByRelevanceFieldEnum["tracking_code"] = "tracking_code";
    AnalyticsOrderByRelevanceFieldEnum["search_analytics"] = "search_analytics";
})(AnalyticsOrderByRelevanceFieldEnum = exports.AnalyticsOrderByRelevanceFieldEnum || (exports.AnalyticsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AnalyticsOrderByRelevanceFieldEnum, {
    name: "AnalyticsOrderByRelevanceFieldEnum",
    description: undefined,
});
