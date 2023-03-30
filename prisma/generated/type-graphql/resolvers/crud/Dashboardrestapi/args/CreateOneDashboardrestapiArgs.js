"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiCreateInput_1 = require("../../../inputs/DashboardrestapiCreateInput");
let CreateOneDashboardrestapiArgs = class CreateOneDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiCreateInput_1.DashboardrestapiCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiCreateInput_1.DashboardrestapiCreateInput)
], CreateOneDashboardrestapiArgs.prototype, "data", void 0);
CreateOneDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardrestapiArgs);
exports.CreateOneDashboardrestapiArgs = CreateOneDashboardrestapiArgs;
