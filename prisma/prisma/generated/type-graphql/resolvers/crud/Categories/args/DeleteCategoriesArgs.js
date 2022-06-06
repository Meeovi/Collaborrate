"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
let DeleteCategoriesArgs = class DeleteCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], DeleteCategoriesArgs.prototype, "where", void 0);
DeleteCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCategoriesArgs);
exports.DeleteCategoriesArgs = DeleteCategoriesArgs;
