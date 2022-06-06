"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleOrderByWithRelationInput_1 = require("../../../inputs/Tax_ruleOrderByWithRelationInput");
const Tax_ruleWhereInput_1 = require("../../../inputs/Tax_ruleWhereInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
const Tax_ruleScalarFieldEnum_1 = require("../../../../enums/Tax_ruleScalarFieldEnum");
let ProductsTax_ruleArgs = class ProductsTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], ProductsTax_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleOrderByWithRelationInput_1.Tax_ruleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsTax_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], ProductsTax_ruleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsTax_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsTax_ruleArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarFieldEnum_1.Tax_ruleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsTax_ruleArgs.prototype, "distinct", void 0);
ProductsTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductsTax_ruleArgs);
exports.ProductsTax_ruleArgs = ProductsTax_ruleArgs;
