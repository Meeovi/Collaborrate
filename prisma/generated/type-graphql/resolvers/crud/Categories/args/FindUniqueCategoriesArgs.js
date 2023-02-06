"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
let FindUniqueCategoriesArgs = class FindUniqueCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], FindUniqueCategoriesArgs.prototype, "where", void 0);
FindUniqueCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCategoriesArgs);
exports.FindUniqueCategoriesArgs = FindUniqueCategoriesArgs;
