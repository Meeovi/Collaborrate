"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesOrderByWithRelationInput_1 = require("../../../inputs/CategoriesOrderByWithRelationInput");
const CategoriesWhereInput_1 = require("../../../inputs/CategoriesWhereInput");
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
const CategoriesScalarFieldEnum_1 = require("../../../../enums/CategoriesScalarFieldEnum");
let FindFirstCategoriesArgs = class FindFirstCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereInput_1.CategoriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereInput_1.CategoriesWhereInput)
], FindFirstCategoriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesOrderByWithRelationInput_1.CategoriesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCategoriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], FindFirstCategoriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCategoriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCategoriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesScalarFieldEnum_1.CategoriesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCategoriesArgs.prototype, "distinct", void 0);
FindFirstCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCategoriesArgs);
exports.FindFirstCategoriesArgs = FindFirstCategoriesArgs;
