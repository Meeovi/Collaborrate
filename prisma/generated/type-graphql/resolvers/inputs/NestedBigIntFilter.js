"use strict";
var NestedBigIntFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBigIntFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let NestedBigIntFilter = NestedBigIntFilter_1 = class NestedBigIntFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedBigIntFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GraphQLScalars.BigIntResolver], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedBigIntFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], NestedBigIntFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBigIntFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBigIntFilter)
], NestedBigIntFilter.prototype, "not", void 0);
NestedBigIntFilter = NestedBigIntFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBigIntFilter", {
        isAbstract: true
    })
], NestedBigIntFilter);
exports.NestedBigIntFilter = NestedBigIntFilter;
