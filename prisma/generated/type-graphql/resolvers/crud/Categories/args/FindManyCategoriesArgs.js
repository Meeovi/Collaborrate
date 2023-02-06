"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesOrderByWithRelationInput_1 = require("../../../inputs/CategoriesOrderByWithRelationInput");
const CategoriesWhereInput_1 = require("../../../inputs/CategoriesWhereInput");
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
const CategoriesScalarFieldEnum_1 = require("../../../../enums/CategoriesScalarFieldEnum");
let FindManyCategoriesArgs = class FindManyCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereInput_1.CategoriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereInput_1.CategoriesWhereInput)
], FindManyCategoriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesOrderByWithRelationInput_1.CategoriesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], FindManyCategoriesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoriesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesScalarFieldEnum_1.CategoriesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoriesArgs.prototype, "distinct", void 0);
FindManyCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCategoriesArgs);
exports.FindManyCategoriesArgs = FindManyCategoriesArgs;
