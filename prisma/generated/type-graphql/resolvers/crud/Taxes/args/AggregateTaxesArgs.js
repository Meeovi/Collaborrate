"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesOrderByWithRelationInput_1 = require("../../../inputs/TaxesOrderByWithRelationInput");
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let AggregateTaxesArgs = class AggregateTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], AggregateTaxesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesOrderByWithRelationInput_1.TaxesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTaxesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], AggregateTaxesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaxesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTaxesArgs.prototype, "skip", void 0);
AggregateTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTaxesArgs);
exports.AggregateTaxesArgs = AggregateTaxesArgs;
