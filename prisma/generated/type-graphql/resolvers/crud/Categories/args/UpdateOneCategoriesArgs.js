"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesUpdateInput_1 = require("../../../inputs/CategoriesUpdateInput");
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
let UpdateOneCategoriesArgs = class UpdateOneCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesUpdateInput_1.CategoriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesUpdateInput_1.CategoriesUpdateInput)
], UpdateOneCategoriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], UpdateOneCategoriesArgs.prototype, "where", void 0);
UpdateOneCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCategoriesArgs);
exports.UpdateOneCategoriesArgs = UpdateOneCategoriesArgs;
