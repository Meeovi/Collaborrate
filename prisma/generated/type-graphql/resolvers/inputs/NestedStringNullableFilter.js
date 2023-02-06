"use strict";
var NestedStringNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringNullableFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter)
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedStringNullableFilter", {
        isAbstract: true
    })
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
