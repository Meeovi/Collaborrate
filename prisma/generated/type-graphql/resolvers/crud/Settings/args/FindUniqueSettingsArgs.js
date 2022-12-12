"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
let FindUniqueSettingsArgs = class FindUniqueSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], FindUniqueSettingsArgs.prototype, "where", void 0);
FindUniqueSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSettingsArgs);
exports.FindUniqueSettingsArgs = FindUniqueSettingsArgs;
