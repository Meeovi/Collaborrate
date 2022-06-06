"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attribute = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeAvgAggregate_1 = require("../outputs/Product_attributeAvgAggregate");
const Product_attributeCountAggregate_1 = require("../outputs/Product_attributeCountAggregate");
const Product_attributeMaxAggregate_1 = require("../outputs/Product_attributeMaxAggregate");
const Product_attributeMinAggregate_1 = require("../outputs/Product_attributeMinAggregate");
const Product_attributeSumAggregate_1 = require("../outputs/Product_attributeSumAggregate");
let AggregateProduct_attribute = class AggregateProduct_attribute {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCountAggregate_1.Product_attributeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCountAggregate_1.Product_attributeCountAggregate)
], AggregateProduct_attribute.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeAvgAggregate_1.Product_attributeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeAvgAggregate_1.Product_attributeAvgAggregate)
], AggregateProduct_attribute.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeSumAggregate_1.Product_attributeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeSumAggregate_1.Product_attributeSumAggregate)
], AggregateProduct_attribute.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMinAggregate_1.Product_attributeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMinAggregate_1.Product_attributeMinAggregate)
], AggregateProduct_attribute.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMaxAggregate_1.Product_attributeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMaxAggregate_1.Product_attributeMaxAggregate)
], AggregateProduct_attribute.prototype, "_max", void 0);
AggregateProduct_attribute = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProduct_attribute", {
        isAbstract: true
    })
], AggregateProduct_attribute);
exports.AggregateProduct_attribute = AggregateProduct_attribute;
