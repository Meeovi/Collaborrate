"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistCreateInput_1 = require("../../../inputs/DashboardslistCreateInput");
let CreateOneDashboardslistArgs = class CreateOneDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistCreateInput_1.DashboardslistCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistCreateInput_1.DashboardslistCreateInput)
], CreateOneDashboardslistArgs.prototype, "data", void 0);
CreateOneDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardslistArgs);
exports.CreateOneDashboardslistArgs = CreateOneDashboardslistArgs;
