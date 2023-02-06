"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const NestedDecimalFilter_1 = require("../inputs/NestedDecimalFilter");
const NestedDecimalWithAggregatesFilter_1 = require("../inputs/NestedDecimalWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let DecimalWithAggregatesFilter = class DecimalWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DecimalWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DecimalWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], DecimalWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalWithAggregatesFilter_1.NestedDecimalWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalWithAggregatesFilter_1.NestedDecimalWithAggregatesFilter)
], DecimalWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], DecimalWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], DecimalWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], DecimalWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], DecimalWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1.NestedDecimalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter_1.NestedDecimalFilter)
], DecimalWithAggregatesFilter.prototype, "_max", void 0);
DecimalWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DecimalWithAggregatesFilter", {
        isAbstract: true
    })
], DecimalWithAggregatesFilter);
exports.DecimalWithAggregatesFilter = DecimalWithAggregatesFilter;
