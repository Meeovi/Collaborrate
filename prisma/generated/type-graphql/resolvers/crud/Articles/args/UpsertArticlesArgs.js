"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesCreateInput_1 = require("../../../inputs/ArticlesCreateInput");
const ArticlesUpdateInput_1 = require("../../../inputs/ArticlesUpdateInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let UpsertArticlesArgs = class UpsertArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], UpsertArticlesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCreateInput_1.ArticlesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesCreateInput_1.ArticlesCreateInput)
], UpsertArticlesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesUpdateInput_1.ArticlesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesUpdateInput_1.ArticlesUpdateInput)
], UpsertArticlesArgs.prototype, "update", void 0);
UpsertArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertArticlesArgs);
exports.UpsertArticlesArgs = UpsertArticlesArgs;
