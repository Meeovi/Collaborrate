"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const NestedJsonNullableFilter_1 = require("../inputs/NestedJsonNullableFilter");
let JsonNullableWithAggregatesFilter = class JsonNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], JsonNullableWithAggregatesFilter.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], JsonNullableWithAggregatesFilter.prototype, "string_contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], JsonNullableWithAggregatesFilter.prototype, "string_starts_with", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], JsonNullableWithAggregatesFilter.prototype, "string_ends_with", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "array_contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "array_starts_with", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "array_ends_with", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], JsonNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedJsonNullableFilter_1.NestedJsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedJsonNullableFilter_1.NestedJsonNullableFilter)
], JsonNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedJsonNullableFilter_1.NestedJsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedJsonNullableFilter_1.NestedJsonNullableFilter)
], JsonNullableWithAggregatesFilter.prototype, "_max", void 0);
JsonNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("JsonNullableWithAggregatesFilter", {
        isAbstract: true
    })
], JsonNullableWithAggregatesFilter);
exports.JsonNullableWithAggregatesFilter = JsonNullableWithAggregatesFilter;
