"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CustomizationsOrderByWithRelationAndSearchRelevanceInput");
const CustomizationsWhereInput_1 = require("../../../inputs/CustomizationsWhereInput");
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
const CustomizationsScalarFieldEnum_1 = require("../../../../enums/CustomizationsScalarFieldEnum");
let FindFirstCustomizationsArgs = class FindFirstCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereInput_1.CustomizationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereInput_1.CustomizationsWhereInput)
], FindFirstCustomizationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsOrderByWithRelationAndSearchRelevanceInput_1.CustomizationsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomizationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], FindFirstCustomizationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomizationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCustomizationsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsScalarFieldEnum_1.CustomizationsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCustomizationsArgs.prototype, "distinct", void 0);
FindFirstCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCustomizationsArgs);
exports.FindFirstCustomizationsArgs = FindFirstCustomizationsArgs;
