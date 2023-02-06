"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesCreateInput_1 = require("../../../inputs/CategoriesCreateInput");
let CreateOneCategoriesArgs = class CreateOneCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCreateInput_1.CategoriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesCreateInput_1.CategoriesCreateInput)
], CreateOneCategoriesArgs.prototype, "data", void 0);
CreateOneCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCategoriesArgs);
exports.CreateOneCategoriesArgs = CreateOneCategoriesArgs;
