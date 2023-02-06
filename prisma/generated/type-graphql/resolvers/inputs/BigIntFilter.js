"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const NestedBigIntFilter_1 = require("../inputs/NestedBigIntFilter");
let BigIntFilter = class BigIntFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BigIntFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], BigIntFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1.NestedBigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter_1.NestedBigIntFilter)
], BigIntFilter.prototype, "not", void 0);
BigIntFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BigIntFilter", {
        isAbstract: true
    })
], BigIntFilter);
exports.BigIntFilter = BigIntFilter;
