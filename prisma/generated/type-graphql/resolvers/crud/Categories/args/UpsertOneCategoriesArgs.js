"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesCreateInput_1 = require("../../../inputs/CategoriesCreateInput");
const CategoriesUpdateInput_1 = require("../../../inputs/CategoriesUpdateInput");
const CategoriesWhereUniqueInput_1 = require("../../../inputs/CategoriesWhereUniqueInput");
let UpsertOneCategoriesArgs = class UpsertOneCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesWhereUniqueInput_1.CategoriesWhereUniqueInput)
], UpsertOneCategoriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesCreateInput_1.CategoriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesCreateInput_1.CategoriesCreateInput)
], UpsertOneCategoriesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesUpdateInput_1.CategoriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoriesUpdateInput_1.CategoriesUpdateInput)
], UpsertOneCategoriesArgs.prototype, "update", void 0);
UpsertOneCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCategoriesArgs);
exports.UpsertOneCategoriesArgs = UpsertOneCategoriesArgs;
