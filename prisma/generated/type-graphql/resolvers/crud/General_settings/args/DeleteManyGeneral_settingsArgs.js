"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
let DeleteManyGeneral_settingsArgs = class DeleteManyGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], DeleteManyGeneral_settingsArgs.prototype, "where", void 0);
DeleteManyGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyGeneral_settingsArgs);
exports.DeleteManyGeneral_settingsArgs = DeleteManyGeneral_settingsArgs;
