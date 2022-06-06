"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesOrderByWithRelationInput_1 = require("../../../inputs/ArticlesOrderByWithRelationInput");
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let AggregateArticlesArgs = class AggregateArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], AggregateArticlesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesOrderByWithRelationInput_1.ArticlesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateArticlesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], AggregateArticlesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateArticlesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateArticlesArgs.prototype, "skip", void 0);
AggregateArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateArticlesArgs);
exports.AggregateArticlesArgs = AggregateArticlesArgs;
