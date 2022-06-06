"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let FindUniqueGeneral_settingsArgs = class FindUniqueGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], FindUniqueGeneral_settingsArgs.prototype, "where", void 0);
FindUniqueGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueGeneral_settingsArgs);
exports.FindUniqueGeneral_settingsArgs = FindUniqueGeneral_settingsArgs;
