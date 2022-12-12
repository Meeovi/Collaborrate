"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyArticlesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesCreateManyInput_1 = require("../../../inputs/ArticlesCreateManyInput");
let CreateManyArticlesArgs = class CreateManyArticlesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArticlesCreateManyInput_1.ArticlesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyArticlesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyArticlesArgs.prototype, "skipDuplicates", void 0);
CreateManyArticlesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyArticlesArgs);
exports.CreateManyArticlesArgs = CreateManyArticlesArgs;
