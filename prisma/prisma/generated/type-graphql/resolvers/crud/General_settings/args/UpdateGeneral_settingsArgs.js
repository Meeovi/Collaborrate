"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsUpdateInput_1 = require("../../../inputs/General_settingsUpdateInput");
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
let UpdateGeneral_settingsArgs = class UpdateGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsUpdateInput_1.General_settingsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsUpdateInput_1.General_settingsUpdateInput)
], UpdateGeneral_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], UpdateGeneral_settingsArgs.prototype, "where", void 0);
UpdateGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateGeneral_settingsArgs);
exports.UpdateGeneral_settingsArgs = UpdateGeneral_settingsArgs;
