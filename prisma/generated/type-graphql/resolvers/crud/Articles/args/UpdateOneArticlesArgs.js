"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesUpdateInput_1 = require("../../../inputs/ArticlesUpdateInput");
const ArticlesWhereUniqueInput_1 = require("../../../inputs/ArticlesWhereUniqueInput");
let UpdateOneArticlesArgs = class UpdateOneArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesUpdateInput_1.ArticlesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesUpdateInput_1.ArticlesUpdateInput)
], UpdateOneArticlesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesWhereUniqueInput_1.ArticlesWhereUniqueInput)
], UpdateOneArticlesArgs.prototype, "where", void 0);
UpdateOneArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneArticlesArgs);
exports.UpdateOneArticlesArgs = UpdateOneArticlesArgs;
