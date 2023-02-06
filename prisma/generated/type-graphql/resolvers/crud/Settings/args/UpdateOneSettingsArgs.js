"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsUpdateInput_1 = require("../../../inputs/SettingsUpdateInput");
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
let UpdateOneSettingsArgs = class UpdateOneSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsUpdateInput_1.SettingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsUpdateInput_1.SettingsUpdateInput)
], UpdateOneSettingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], UpdateOneSettingsArgs.prototype, "where", void 0);
UpdateOneSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSettingsArgs);
exports.UpdateOneSettingsArgs = UpdateOneSettingsArgs;
