"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesOrderByWithRelationInput_1 = require("../../../inputs/ArticlesOrderByWithRelationInput");
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
const ArticlesScalarFieldEnum_1 = require("../../../../enums/ArticlesScalarFieldEnum");
let FindFirstArticlesArgs = class FindFirstArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], FindFirstArticlesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesOrderByWithRelationInput_1.ArticlesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArticlesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], FindFirstArticlesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArticlesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArticlesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesScalarFieldEnum_1.ArticlesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArticlesArgs.prototype, "distinct", void 0);
FindFirstArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstArticlesArgs);
exports.FindFirstArticlesArgs = FindFirstArticlesArgs;
