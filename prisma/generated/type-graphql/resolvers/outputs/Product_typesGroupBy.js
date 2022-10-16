"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Product_typesAvgAggregate_1 = require("../outputs/Product_typesAvgAggregate");
const Product_typesCountAggregate_1 = require("../outputs/Product_typesCountAggregate");
const Product_typesMaxAggregate_1 = require("../outputs/Product_typesMaxAggregate");
const Product_typesMinAggregate_1 = require("../outputs/Product_typesMinAggregate");
const Product_typesSumAggregate_1 = require("../outputs/Product_typesSumAggregate");
let Product_typesGroupBy = class Product_typesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_typesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "type_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "taxes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "isShippable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "product_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Product_typesGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesCountAggregate_1.Product_typesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesCountAggregate_1.Product_typesCountAggregate)
], Product_typesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesAvgAggregate_1.Product_typesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesAvgAggregate_1.Product_typesAvgAggregate)
], Product_typesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesSumAggregate_1.Product_typesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesSumAggregate_1.Product_typesSumAggregate)
], Product_typesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMinAggregate_1.Product_typesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMinAggregate_1.Product_typesMinAggregate)
], Product_typesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMaxAggregate_1.Product_typesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMaxAggregate_1.Product_typesMaxAggregate)
], Product_typesGroupBy.prototype, "_max", void 0);
Product_typesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_typesGroupBy", {
        isAbstract: true
    })
], Product_typesGroupBy);
exports.Product_typesGroupBy = Product_typesGroupBy;
