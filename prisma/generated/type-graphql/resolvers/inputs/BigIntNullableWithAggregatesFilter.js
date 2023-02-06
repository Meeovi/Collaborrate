"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const NestedBigIntNullableFilter_1 = require("../inputs/NestedBigIntNullableFilter");
const NestedBigIntNullableWithAggregatesFilter_1 = require("../inputs/NestedBigIntNullableWithAggregatesFilter");
const NestedFloatNullableFilter_1 = require("../inputs/NestedFloatNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let BigIntNullableWithAggregatesFilter = class BigIntNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntNullableWithAggregatesFilter_1.NestedBigIntNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntNullableWithAggregatesFilter_1.NestedBigIntNullableWithAggregatesFilter)
], BigIntNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], BigIntNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatNullableFilter_1.NestedFloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatNullableFilter_1.NestedFloatNullableFilter)
], BigIntNullableWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntNullableFilter_1.NestedBigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntNullableFilter_1.NestedBigIntNullableFilter)
], BigIntNullableWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntNullableFilter_1.NestedBigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntNullableFilter_1.NestedBigIntNullableFilter)
], BigIntNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntNullableFilter_1.NestedBigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntNullableFilter_1.NestedBigIntNullableFilter)
], BigIntNullableWithAggregatesFilter.prototype, "_max", void 0);
BigIntNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BigIntNullableWithAggregatesFilter", {
        isAbstract: true
    })
], BigIntNullableWithAggregatesFilter);
exports.BigIntNullableWithAggregatesFilter = BigIntNullableWithAggregatesFilter;
