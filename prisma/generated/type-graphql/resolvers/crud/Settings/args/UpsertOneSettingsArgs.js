"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsCreateInput_1 = require("../../../inputs/SettingsCreateInput");
const SettingsUpdateInput_1 = require("../../../inputs/SettingsUpdateInput");
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
let UpsertOneSettingsArgs = class UpsertOneSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], UpsertOneSettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsCreateInput_1.SettingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsCreateInput_1.SettingsCreateInput)
], UpsertOneSettingsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsUpdateInput_1.SettingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsUpdateInput_1.SettingsUpdateInput)
], UpsertOneSettingsArgs.prototype, "update", void 0);
UpsertOneSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSettingsArgs);
exports.UpsertOneSettingsArgs = UpsertOneSettingsArgs;
