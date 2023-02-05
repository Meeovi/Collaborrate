"use strict";
var NestedDecimalFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDecimalFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let NestedDecimalFilter = NestedDecimalFilter_1 = class NestedDecimalFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [scalars_1.DecimalJSScalar], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedDecimalFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], NestedDecimalFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedDecimalFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedDecimalFilter)
], NestedDecimalFilter.prototype, "not", void 0);
NestedDecimalFilter = NestedDecimalFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedDecimalFilter", {
        isAbstract: true
    })
], NestedDecimalFilter);
exports.NestedDecimalFilter = NestedDecimalFilter;
