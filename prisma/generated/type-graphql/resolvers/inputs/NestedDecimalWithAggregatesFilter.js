"use strict";
var NestedDecimalWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDecimalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const NestedDecimalFilter_1 = require("../inputs/NestedDecimalFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter_1 = class NestedDecimalWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalWithAggregatesFilter)
], NestedDecimalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_max", void 0);
NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDecimalWithAggregatesFilter", {
        isAbstract: true
    })
], NestedDecimalWithAggregatesFilter);
exports.NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter;
