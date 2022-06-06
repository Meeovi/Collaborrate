"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attribute_set = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setAvgAggregate_1 = require("../outputs/Product_attribute_setAvgAggregate");
const Product_attribute_setCountAggregate_1 = require("../outputs/Product_attribute_setCountAggregate");
const Product_attribute_setMaxAggregate_1 = require("../outputs/Product_attribute_setMaxAggregate");
const Product_attribute_setMinAggregate_1 = require("../outputs/Product_attribute_setMinAggregate");
const Product_attribute_setSumAggregate_1 = require("../outputs/Product_attribute_setSumAggregate");
let AggregateProduct_attribute_set = class AggregateProduct_attribute_set {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCountAggregate_1.Product_attribute_setCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCountAggregate_1.Product_attribute_setCountAggregate)
], AggregateProduct_attribute_set.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setAvgAggregate_1.Product_attribute_setAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setAvgAggregate_1.Product_attribute_setAvgAggregate)
], AggregateProduct_attribute_set.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setSumAggregate_1.Product_attribute_setSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setSumAggregate_1.Product_attribute_setSumAggregate)
], AggregateProduct_attribute_set.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMinAggregate_1.Product_attribute_setMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMinAggregate_1.Product_attribute_setMinAggregate)
], AggregateProduct_attribute_set.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMaxAggregate_1.Product_attribute_setMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMaxAggregate_1.Product_attribute_setMaxAggregate)
], AggregateProduct_attribute_set.prototype, "_max", void 0);
AggregateProduct_attribute_set = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProduct_attribute_set", {
        isAbstract: true
    })
], AggregateProduct_attribute_set);
exports.AggregateProduct_attribute_set = AggregateProduct_attribute_set;
