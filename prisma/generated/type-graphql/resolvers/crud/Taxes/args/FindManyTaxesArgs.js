"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesOrderByWithRelationInput_1 = require("../../../inputs/TaxesOrderByWithRelationInput");
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
const TaxesScalarFieldEnum_1 = require("../../../../enums/TaxesScalarFieldEnum");
let FindManyTaxesArgs = class FindManyTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], FindManyTaxesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesOrderByWithRelationInput_1.TaxesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTaxesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], FindManyTaxesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTaxesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTaxesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesScalarFieldEnum_1.TaxesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTaxesArgs.prototype, "distinct", void 0);
FindManyTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTaxesArgs);
exports.FindManyTaxesArgs = FindManyTaxesArgs;
