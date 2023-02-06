"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedStringNullableFilter_1 = require("../inputs/NestedStringNullableFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let StringNullableFilter = class StringNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StringNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StringNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringNullableFilter.prototype, "mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StringNullableFilter", {
        isAbstract: true
    })
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
