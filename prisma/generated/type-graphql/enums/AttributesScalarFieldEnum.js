"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AttributesScalarFieldEnum;
(function (AttributesScalarFieldEnum) {
    AttributesScalarFieldEnum["id"] = "id";
    AttributesScalarFieldEnum["default_label"] = "default_label";
    AttributesScalarFieldEnum["attribute_code"] = "attribute_code";
    AttributesScalarFieldEnum["filter_options"] = "filter_options";
    AttributesScalarFieldEnum["use_search"] = "use_search";
    AttributesScalarFieldEnum["layered_navigation"] = "layered_navigation";
    AttributesScalarFieldEnum["search_results_layered_navigation"] = "search_results_layered_navigation";
    AttributesScalarFieldEnum["position"] = "position";
    AttributesScalarFieldEnum["promo_rule_conditions"] = "promo_rule_conditions";
    AttributesScalarFieldEnum["allow_html_tags_storefront"] = "allow_html_tags_storefront";
    AttributesScalarFieldEnum["visible_catalog_pages_storefront"] = "visible_catalog_pages_storefront";
    AttributesScalarFieldEnum["used_product_listing"] = "used_product_listing";
    AttributesScalarFieldEnum["used_sorting_product_listing"] = "used_sorting_product_listing";
    AttributesScalarFieldEnum["prod_id"] = "prod_id";
    AttributesScalarFieldEnum["attribute_class"] = "attribute_class";
    AttributesScalarFieldEnum["attribute_value"] = "attribute_value";
    AttributesScalarFieldEnum["column_options"] = "column_options";
    AttributesScalarFieldEnum["faceted_navigation"] = "faceted_navigation";
    AttributesScalarFieldEnum["isPublic"] = "isPublic";
    AttributesScalarFieldEnum["meta_description"] = "meta_description";
    AttributesScalarFieldEnum["meta_name"] = "meta_name";
    AttributesScalarFieldEnum["meta_url"] = "meta_url";
    AttributesScalarFieldEnum["product_attribute_set"] = "product_attribute_set";
    AttributesScalarFieldEnum["products"] = "products";
})(AttributesScalarFieldEnum = exports.AttributesScalarFieldEnum || (exports.AttributesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AttributesScalarFieldEnum, {
    name: "AttributesScalarFieldEnum",
    description: undefined,
});
