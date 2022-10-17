"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Tax_rateOrderByWithRelationAndSearchRelevanceInput");
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
const Tax_rateWhereUniqueInput_1 = require("../../../inputs/Tax_rateWhereUniqueInput");
const Tax_rateScalarFieldEnum_1 = require("../../../../enums/Tax_rateScalarFieldEnum");
let FindFirstTax_rateArgs = class FindFirstTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], FindFirstTax_rateArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateOrderByWithRelationAndSearchRelevanceInput_1.Tax_rateOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTax_rateArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], FindFirstTax_rateArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTax_rateArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTax_rateArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateScalarFieldEnum_1.Tax_rateScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTax_rateArgs.prototype, "distinct", void 0);
FindFirstTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTax_rateArgs);
exports.FindFirstTax_rateArgs = FindFirstTax_rateArgs;
