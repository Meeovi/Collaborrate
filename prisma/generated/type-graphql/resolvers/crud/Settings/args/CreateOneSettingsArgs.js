"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsCreateInput_1 = require("../../../inputs/SettingsCreateInput");
let CreateOneSettingsArgs = class CreateOneSettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsCreateInput_1.SettingsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingsCreateInput_1.SettingsCreateInput)
], CreateOneSettingsArgs.prototype, "data", void 0);
CreateOneSettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSettingsArgs);
exports.CreateOneSettingsArgs = CreateOneSettingsArgs;
