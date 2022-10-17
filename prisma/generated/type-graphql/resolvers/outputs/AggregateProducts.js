"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProducts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsAvgAggregate_1 = require("../outputs/ProductsAvgAggregate");
const ProductsCountAggregate_1 = require("../outputs/ProductsCountAggregate");
const ProductsMaxAggregate_1 = require("../outputs/ProductsMaxAggregate");
const ProductsMinAggregate_1 = require("../outputs/ProductsMinAggregate");
const ProductsSumAggregate_1 = require("../outputs/ProductsSumAggregate");
let AggregateProducts = class AggregateProducts {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCountAggregate_1.ProductsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCountAggregate_1.ProductsCountAggregate)
], AggregateProducts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsAvgAggregate_1.ProductsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsAvgAggregate_1.ProductsAvgAggregate)
], AggregateProducts.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsSumAggregate_1.ProductsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsSumAggregate_1.ProductsSumAggregate)
], AggregateProducts.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsMinAggregate_1.ProductsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsMinAggregate_1.ProductsMinAggregate)
], AggregateProducts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsMaxAggregate_1.ProductsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsMaxAggregate_1.ProductsMaxAggregate)
], AggregateProducts.prototype, "_max", void 0);
AggregateProducts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProducts", {
        isAbstract: true
    })
], AggregateProducts);
exports.AggregateProducts = AggregateProducts;
