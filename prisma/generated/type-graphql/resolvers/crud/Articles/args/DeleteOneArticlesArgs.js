"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let DeleteOneArticlesArgs = class DeleteOneArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], DeleteOneArticlesArgs.prototype, "where", void 0);
DeleteOneArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneArticlesArgs);
exports.DeleteOneArticlesArgs = DeleteOneArticlesArgs;
