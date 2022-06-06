"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let DeleteArticlesArgs = class DeleteArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], DeleteArticlesArgs.prototype, "where", void 0);
DeleteArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteArticlesArgs);
exports.DeleteArticlesArgs = DeleteArticlesArgs;
