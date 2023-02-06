"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_types = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesAvgAggregate_1 = require("../outputs/Product_typesAvgAggregate");
const Product_typesCountAggregate_1 = require("../outputs/Product_typesCountAggregate");
const Product_typesMaxAggregate_1 = require("../outputs/Product_typesMaxAggregate");
const Product_typesMinAggregate_1 = require("../outputs/Product_typesMinAggregate");
const Product_typesSumAggregate_1 = require("../outputs/Product_typesSumAggregate");
let AggregateProduct_types = class AggregateProduct_types {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesCountAggregate_1.Product_typesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesCountAggregate_1.Product_typesCountAggregate)
], AggregateProduct_types.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesAvgAggregate_1.Product_typesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesAvgAggregate_1.Product_typesAvgAggregate)
], AggregateProduct_types.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesSumAggregate_1.Product_typesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesSumAggregate_1.Product_typesSumAggregate)
], AggregateProduct_types.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMinAggregate_1.Product_typesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMinAggregate_1.Product_typesMinAggregate)
], AggregateProduct_types.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMaxAggregate_1.Product_typesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMaxAggregate_1.Product_typesMaxAggregate)
], AggregateProduct_types.prototype, "_max", void 0);
AggregateProduct_types = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProduct_types", {
        isAbstract: true
    })
], AggregateProduct_types);
exports.AggregateProduct_types = AggregateProduct_types;
