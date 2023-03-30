"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const AttributesAvgAggregate_1 = require("../outputs/AttributesAvgAggregate");
const AttributesCountAggregate_1 = require("../outputs/AttributesCountAggregate");
const AttributesMaxAggregate_1 = require("../outputs/AttributesMaxAggregate");
const AttributesMinAggregate_1 = require("../outputs/AttributesMinAggregate");
const AttributesSumAggregate_1 = require("../outputs/AttributesSumAggregate");
let AttributesGroupBy = class AttributesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AttributesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AttributesGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "attribute_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "attribute_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "faceted_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AttributesGroupBy.prototype, "meta_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "product_attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesCountAggregate_1.AttributesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesCountAggregate_1.AttributesCountAggregate)
], AttributesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesAvgAggregate_1.AttributesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesAvgAggregate_1.AttributesAvgAggregate)
], AttributesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesSumAggregate_1.AttributesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesSumAggregate_1.AttributesSumAggregate)
], AttributesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMinAggregate_1.AttributesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMinAggregate_1.AttributesMinAggregate)
], AttributesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMaxAggregate_1.AttributesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMaxAggregate_1.AttributesMaxAggregate)
], AttributesGroupBy.prototype, "_max", void 0);
AttributesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttributesGroupBy", {
        isAbstract: true
    })
], AttributesGroupBy);
exports.AttributesGroupBy = AttributesGroupBy;
