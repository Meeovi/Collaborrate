"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsCreateInput_1 = require("../../../inputs/DashboardsCreateInput");
let CreateOneDashboardsArgs = class CreateOneDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsCreateInput_1.DashboardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsCreateInput_1.DashboardsCreateInput)
], CreateOneDashboardsArgs.prototype, "data", void 0);
CreateOneDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardsArgs);
exports.CreateOneDashboardsArgs = CreateOneDashboardsArgs;
