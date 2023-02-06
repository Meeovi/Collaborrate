"use strict";
var NestedDecimalNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDecimalNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const NestedDecimalNullableFilter_1 = require("../inputs/NestedDecimalNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let NestedDecimalNullableWithAggregatesFilter = NestedDecimalNullableWithAggregatesFilter_1 = class NestedDecimalNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableWithAggregatesFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], NestedDecimalNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedDecimalNullableWithAggregatesFilter = NestedDecimalNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDecimalNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedDecimalNullableWithAggregatesFilter);
exports.NestedDecimalNullableWithAggregatesFilter = NestedDecimalNullableWithAggregatesFilter;
