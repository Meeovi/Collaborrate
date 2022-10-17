"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesUpdateManyMutationInput_1 = require("../../../inputs/ArticlesUpdateManyMutationInput");
const ArticlesWhereInput_1 = require("../../../inputs/ArticlesWhereInput");
let UpdateManyArticlesArgs = class UpdateManyArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesUpdateManyMutationInput_1.ArticlesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArticlesUpdateManyMutationInput_1.ArticlesUpdateManyMutationInput)
], UpdateManyArticlesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesWhereInput_1.ArticlesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesWhereInput_1.ArticlesWhereInput)
], UpdateManyArticlesArgs.prototype, "where", void 0);
UpdateManyArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyArticlesArgs);
exports.UpdateManyArticlesArgs = UpdateManyArticlesArgs;
