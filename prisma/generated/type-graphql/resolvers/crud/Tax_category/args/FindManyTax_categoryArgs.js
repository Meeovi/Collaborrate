"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTax_categoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Tax_categoryOrderByWithRelationAndSearchRelevanceInput");
const Tax_categoryWhereInput_1 = require("../../../inputs/Tax_categoryWhereInput");
const Tax_categoryWhereUniqueInput_1 = require("../../../inputs/Tax_categoryWhereUniqueInput");
const Tax_categoryScalarFieldEnum_1 = require("../../../../enums/Tax_categoryScalarFieldEnum");
let FindManyTax_categoryArgs = class FindManyTax_categoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereInput_1.Tax_categoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereInput_1.Tax_categoryWhereInput)
], FindManyTax_categoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryOrderByWithRelationAndSearchRelevanceInput_1.Tax_categoryOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTax_categoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryWhereUniqueInput_1.Tax_categoryWhereUniqueInput)
], FindManyTax_categoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTax_categoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTax_categoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryScalarFieldEnum_1.Tax_categoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTax_categoryArgs.prototype, "distinct", void 0);
FindManyTax_categoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTax_categoryArgs);
exports.FindManyTax_categoryArgs = FindManyTax_categoryArgs;
