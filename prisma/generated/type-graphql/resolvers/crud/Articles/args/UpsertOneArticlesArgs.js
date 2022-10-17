"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesCreateInput_1 = require("../../../inputs/ArticlesCreateInput");
const ArticlesUpdateInput_1 = require("../../../inputs/ArticlesUpdateInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let UpsertOneArticlesArgs = class UpsertOneArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], UpsertOneArticlesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCreateInput_1.ArticlesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesCreateInput_1.ArticlesCreateInput)
], UpsertOneArticlesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesUpdateInput_1.ArticlesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesUpdateInput_1.ArticlesUpdateInput)
], UpsertOneArticlesArgs.prototype, "update", void 0);
UpsertOneArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneArticlesArgs);
exports.UpsertOneArticlesArgs = UpsertOneArticlesArgs;
