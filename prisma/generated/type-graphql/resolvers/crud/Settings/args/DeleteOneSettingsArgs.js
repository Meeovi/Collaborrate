"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
let DeleteOneSettingsArgs = class DeleteOneSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], DeleteOneSettingsArgs.prototype, "where", void 0);
DeleteOneSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingsArgs);
exports.DeleteOneSettingsArgs = DeleteOneSettingsArgs;
