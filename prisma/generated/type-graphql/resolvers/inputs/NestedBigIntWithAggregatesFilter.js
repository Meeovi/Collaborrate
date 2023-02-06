"use strict";
var NestedBigIntWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBigIntWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const NestedBigIntFilter_1 = require("../inputs/NestedBigIntFilter");
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedBigIntWithAggregatesFilter = NestedBigIntWithAggregatesFilter_1 = class NestedBigIntWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedBigIntWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedBigIntWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntWithAggregatesFilter)
], NestedBigIntWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedBigIntWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], NestedBigIntWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], NestedBigIntWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], NestedBigIntWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], NestedBigIntWithAggregatesFilter.prototype, "_max", void 0);
NestedBigIntWithAggregatesFilter = NestedBigIntWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBigIntWithAggregatesFilter", {
        isAbstract: true
    })
], NestedBigIntWithAggregatesFilter);
exports.NestedBigIntWithAggregatesFilter = NestedBigIntWithAggregatesFilter;
