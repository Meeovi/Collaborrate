"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesCreateInput_1 = require("../../../inputs/ArticlesCreateInput");
let CreateOneArticlesArgs = class CreateOneArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCreateInput_1.ArticlesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesCreateInput_1.ArticlesCreateInput)
], CreateOneArticlesArgs.prototype, "data", void 0);
CreateOneArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneArticlesArgs);
exports.CreateOneArticlesArgs = CreateOneArticlesArgs;
