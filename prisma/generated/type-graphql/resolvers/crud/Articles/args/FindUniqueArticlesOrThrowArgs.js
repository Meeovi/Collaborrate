"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueArticlesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let FindUniqueArticlesOrThrowArgs = class FindUniqueArticlesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], FindUniqueArticlesOrThrowArgs.prototype, "where", void 0);
FindUniqueArticlesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueArticlesOrThrowArgs);
exports.FindUniqueArticlesOrThrowArgs = FindUniqueArticlesOrThrowArgs;
