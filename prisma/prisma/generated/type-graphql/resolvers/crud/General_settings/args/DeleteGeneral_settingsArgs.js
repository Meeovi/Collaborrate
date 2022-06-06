"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let DeleteGeneral_settingsArgs = class DeleteGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], DeleteGeneral_settingsArgs.prototype, "where", void 0);
DeleteGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteGeneral_settingsArgs);
exports.DeleteGeneral_settingsArgs = DeleteGeneral_settingsArgs;
