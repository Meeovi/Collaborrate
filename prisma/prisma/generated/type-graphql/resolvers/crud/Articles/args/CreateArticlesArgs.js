"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesCreateInput_1 = require("../../../inputs/ArticlesCreateInput");
let CreateArticlesArgs = class CreateArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCreateInput_1.ArticlesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesCreateInput_1.ArticlesCreateInput)
], CreateArticlesArgs.prototype, "data", void 0);
CreateArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateArticlesArgs);
exports.CreateArticlesArgs = CreateArticlesArgs;
