"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsUpdateManyMutationInput_1 = require("../../../inputs/General_settingsUpdateManyMutationInput");
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
let UpdateManyGeneral_settingsArgs = class UpdateManyGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsUpdateManyMutationInput_1.General_settingsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsUpdateManyMutationInput_1.General_settingsUpdateManyMutationInput)
], UpdateManyGeneral_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], UpdateManyGeneral_settingsArgs.prototype, "where", void 0);
UpdateManyGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyGeneral_settingsArgs);
exports.UpdateManyGeneral_settingsArgs = UpdateManyGeneral_settingsArgs;
