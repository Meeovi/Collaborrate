"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateOrderByWithRelationInput_1 = require("../../../inputs/Tax_rateOrderByWithRelationInput");
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
const Tax_rateScalarFieldEnum_1 = require("../../../../enums/Tax_rateScalarFieldEnum");
let ProductsTax_rateArgs = class ProductsTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], ProductsTax_rateArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateOrderByWithRelationInput_1.Tax_rateOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsTax_rateArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], ProductsTax_rateArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsTax_rateArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsTax_rateArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateScalarFieldEnum_1.Tax_rateScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsTax_rateArgs.prototype, "distinct", void 0);
ProductsTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductsTax_rateArgs);
exports.ProductsTax_rateArgs = ProductsTax_rateArgs;
