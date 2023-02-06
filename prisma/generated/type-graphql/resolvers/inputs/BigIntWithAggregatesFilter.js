"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const NestedBigIntFilter_1 = require("../inputs/NestedBigIntFilter");
const NestedBigIntWithAggregatesFilter_1 = require("../inputs/NestedBigIntWithAggregatesFilter");
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let BigIntWithAggregatesFilter = class BigIntWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntWithAggregatesFilter_1.NestedBigIntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntWithAggregatesFilter_1.NestedBigIntWithAggregatesFilter)
], BigIntWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], BigIntWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], BigIntWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], BigIntWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], BigIntWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], BigIntWithAggregatesFilter.prototype, "_max", void 0);
BigIntWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BigIntWithAggregatesFilter", {
        isAbstract: true
    })
], BigIntWithAggregatesFilter);
exports.BigIntWithAggregatesFilter = BigIntWithAggregatesFilter;
