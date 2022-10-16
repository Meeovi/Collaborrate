"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesOrderByWithAggregationInput_1 = require("../../../inputs/ArticlesOrderByWithAggregationInput");
const ArticlesScalarWhereWithAggregatesInput_1 = require("../../../inputs/ArticlesScalarWhereWithAggregatesInput");
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
const ArticlesScalarFieldEnum_1 = require("../../../../enums/ArticlesScalarFieldEnum");
let GroupByArticlesArgs = class GroupByArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], GroupByArticlesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesOrderByWithAggregationInput_1.ArticlesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByArticlesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesScalarFieldEnum_1.ArticlesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByArticlesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesScalarWhereWithAggregatesInput_1.ArticlesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesScalarWhereWithAggregatesInput_1.ArticlesScalarWhereWithAggregatesInput)
], GroupByArticlesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByArticlesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByArticlesArgs.prototype, "skip", void 0);
GroupByArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByArticlesArgs);
exports.GroupByArticlesArgs = GroupByArticlesArgs;
