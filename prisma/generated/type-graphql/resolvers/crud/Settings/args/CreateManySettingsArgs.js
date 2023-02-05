"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsCreateManyInput_1 = require("../../../inputs/SettingsCreateManyInput");
let CreateManySettingsArgs = class CreateManySettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsCreateManyInput_1.SettingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySettingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySettingsArgs.prototype, "skipDuplicates", void 0);
CreateManySettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySettingsArgs);
exports.CreateManySettingsArgs = CreateManySettingsArgs;
