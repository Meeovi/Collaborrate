"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstArticlesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ArticlesOrderByWithRelationAndSearchRelevanceInput");
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
const ArticlesScalarFieldEnum_1 = require("../../../../enums/ArticlesScalarFieldEnum");
let FindFirstArticlesOrThrowArgs = class FindFirstArticlesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], FindFirstArticlesOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesOrderByWithRelationAndSearchRelevanceInput_1.ArticlesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArticlesOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], FindFirstArticlesOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArticlesOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstArticlesOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesScalarFieldEnum_1.ArticlesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstArticlesOrThrowArgs.prototype, "distinct", void 0);
FindFirstArticlesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstArticlesOrThrowArgs);
exports.FindFirstArticlesOrThrowArgs = FindFirstArticlesOrThrowArgs;
