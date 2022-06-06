"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Product_attributeAvgAggregate_1 = require("../outputs/Product_attributeAvgAggregate");
const Product_attributeCountAggregate_1 = require("../outputs/Product_attributeCountAggregate");
const Product_attributeMaxAggregate_1 = require("../outputs/Product_attributeMaxAggregate");
const Product_attributeMinAggregate_1 = require("../outputs/Product_attributeMinAggregate");
const Product_attributeSumAggregate_1 = require("../outputs/Product_attributeSumAggregate");
let Product_attributeGroupBy = class Product_attributeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeGroupBy.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeGroupBy.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Product_attributeGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCountAggregate_1.Product_attributeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCountAggregate_1.Product_attributeCountAggregate)
], Product_attributeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeAvgAggregate_1.Product_attributeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeAvgAggregate_1.Product_attributeAvgAggregate)
], Product_attributeGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeSumAggregate_1.Product_attributeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeSumAggregate_1.Product_attributeSumAggregate)
], Product_attributeGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMinAggregate_1.Product_attributeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMinAggregate_1.Product_attributeMinAggregate)
], Product_attributeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMaxAggregate_1.Product_attributeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMaxAggregate_1.Product_attributeMaxAggregate)
], Product_attributeGroupBy.prototype, "_max", void 0);
Product_attributeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attributeGroupBy", {
        isAbstract: true
    })
], Product_attributeGroupBy);
exports.Product_attributeGroupBy = Product_attributeGroupBy;
