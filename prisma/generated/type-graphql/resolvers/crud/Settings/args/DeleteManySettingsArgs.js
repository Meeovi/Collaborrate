"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsWhereInput_1 = require("../../../inputs/SettingsWhereInput");
let DeleteManySettingsArgs = class DeleteManySettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereInput_1.SettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereInput_1.SettingsWhereInput)
], DeleteManySettingsArgs.prototype, "where", void 0);
DeleteManySettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySettingsArgs);
exports.DeleteManySettingsArgs = DeleteManySettingsArgs;
