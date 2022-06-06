"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsCreateManyInput_1 = require("../../../inputs/General_settingsCreateManyInput");
let CreateManyGeneral_settingsArgs = class CreateManyGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsCreateManyInput_1.General_settingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyGeneral_settingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyGeneral_settingsArgs.prototype, "skipDuplicates", void 0);
CreateManyGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyGeneral_settingsArgs);
exports.CreateManyGeneral_settingsArgs = CreateManyGeneral_settingsArgs;
