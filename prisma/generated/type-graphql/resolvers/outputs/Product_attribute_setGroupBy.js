"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setAvgAggregate_1 = require("../outputs/Product_attribute_setAvgAggregate");
const Product_attribute_setCountAggregate_1 = require("../outputs/Product_attribute_setCountAggregate");
const Product_attribute_setMaxAggregate_1 = require("../outputs/Product_attribute_setMaxAggregate");
const Product_attribute_setMinAggregate_1 = require("../outputs/Product_attribute_setMinAggregate");
const Product_attribute_setSumAggregate_1 = require("../outputs/Product_attribute_setSumAggregate");
let Product_attribute_setGroupBy = class Product_attribute_setGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setGroupBy.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setGroupBy.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCountAggregate_1.Product_attribute_setCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCountAggregate_1.Product_attribute_setCountAggregate)
], Product_attribute_setGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setAvgAggregate_1.Product_attribute_setAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setAvgAggregate_1.Product_attribute_setAvgAggregate)
], Product_attribute_setGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setSumAggregate_1.Product_attribute_setSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setSumAggregate_1.Product_attribute_setSumAggregate)
], Product_attribute_setGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMinAggregate_1.Product_attribute_setMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMinAggregate_1.Product_attribute_setMinAggregate)
], Product_attribute_setGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMaxAggregate_1.Product_attribute_setMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMaxAggregate_1.Product_attribute_setMaxAggregate)
], Product_attribute_setGroupBy.prototype, "_max", void 0);
Product_attribute_setGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_setGroupBy", {
        isAbstract: true
    })
], Product_attribute_setGroupBy);
exports.Product_attribute_setGroupBy = Product_attribute_setGroupBy;
