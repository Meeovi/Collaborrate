"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesCreateInput_1 = require("../../../inputs/CategoriesCreateInput");
let CreateCategoriesArgs = class CreateCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCreateInput_1.CategoriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesCreateInput_1.CategoriesCreateInput)
], CreateCategoriesArgs.prototype, "data", void 0);
CreateCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCategoriesArgs);
exports.CreateCategoriesArgs = CreateCategoriesArgs;
