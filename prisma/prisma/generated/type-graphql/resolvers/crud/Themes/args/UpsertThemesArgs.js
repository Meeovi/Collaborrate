"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateInput_1 = require("../../../inputs/ThemesCreateInput");
const ThemesUpdateInput_1 = require("../../../inputs/ThemesUpdateInput");
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
let UpsertThemesArgs = class UpsertThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], UpsertThemesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateInput_1.ThemesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesCreateInput_1.ThemesCreateInput)
], UpsertThemesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateInput_1.ThemesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateInput_1.ThemesUpdateInput)
], UpsertThemesArgs.prototype, "update", void 0);
UpsertThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThemesArgs);
exports.UpsertThemesArgs = UpsertThemesArgs;
