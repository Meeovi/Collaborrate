"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsUpdateManyMutationInput_1 = require("../../../inputs/SettingsUpdateManyMutationInput");
const SettingsWhereInput_1 = require("../../../inputs/SettingsWhereInput");
let UpdateManySettingsArgs = class UpdateManySettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsUpdateManyMutationInput_1.SettingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsUpdateManyMutationInput_1.SettingsUpdateManyMutationInput)
], UpdateManySettingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereInput_1.SettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereInput_1.SettingsWhereInput)
], UpdateManySettingsArgs.prototype, "where", void 0);
UpdateManySettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySettingsArgs);
exports.UpdateManySettingsArgs = UpdateManySettingsArgs;
