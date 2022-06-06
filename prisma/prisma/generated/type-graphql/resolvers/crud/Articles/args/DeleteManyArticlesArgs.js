"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
let DeleteManyArticlesArgs = class DeleteManyArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], DeleteManyArticlesArgs.prototype, "where", void 0);
DeleteManyArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyArticlesArgs);
exports.DeleteManyArticlesArgs = DeleteManyArticlesArgs;
