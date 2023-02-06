"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateInput_1 = require("../../../inputs/ThemesCreateInput");
const ThemesUpdateInput_1 = require("../../../inputs/ThemesUpdateInput");
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
let UpsertOneThemesArgs = class UpsertOneThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], UpsertOneThemesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateInput_1.ThemesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesCreateInput_1.ThemesCreateInput)
], UpsertOneThemesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateInput_1.ThemesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateInput_1.ThemesUpdateInput)
], UpsertOneThemesArgs.prototype, "update", void 0);
UpsertOneThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneThemesArgs);
exports.UpsertOneThemesArgs = UpsertOneThemesArgs;
