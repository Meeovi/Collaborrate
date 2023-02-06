"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSettingsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
let FindUniqueSettingsOrThrowArgs = class FindUniqueSettingsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], FindUniqueSettingsOrThrowArgs.prototype, "where", void 0);
FindUniqueSettingsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSettingsOrThrowArgs);
exports.FindUniqueSettingsOrThrowArgs = FindUniqueSettingsOrThrowArgs;
