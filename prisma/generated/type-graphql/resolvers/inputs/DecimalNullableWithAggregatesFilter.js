"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const NestedDecimalNullableFilter_1 = require("../inputs/NestedDecimalNullableFilter");
const NestedDecimalNullableWithAggregatesFilter_1 = require("../inputs/NestedDecimalNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let DecimalNullableWithAggregatesFilter = class DecimalNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DecimalNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DecimalNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableWithAggregatesFilter_1.NestedDecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableWithAggregatesFilter_1.NestedDecimalNullableWithAggregatesFilter)
], DecimalNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], DecimalNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], DecimalNullableWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], DecimalNullableWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], DecimalNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalNullableFilter_1.NestedDecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalNullableFilter_1.NestedDecimalNullableFilter)
], DecimalNullableWithAggregatesFilter.prototype, "_max", void 0);
DecimalNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DecimalNullableWithAggregatesFilter", {
        isAbstract: true
    })
], DecimalNullableWithAggregatesFilter);
exports.DecimalNullableWithAggregatesFilter = DecimalNullableWithAggregatesFilter;
