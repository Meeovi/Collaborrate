"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistUpdateInput_1 = require("../../../inputs/DashboardslistUpdateInput");
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
let UpdateOneDashboardslistArgs = class UpdateOneDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistUpdateInput_1.DashboardslistUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistUpdateInput_1.DashboardslistUpdateInput)
], UpdateOneDashboardslistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], UpdateOneDashboardslistArgs.prototype, "where", void 0);
UpdateOneDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardslistArgs);
exports.UpdateOneDashboardslistArgs = UpdateOneDashboardslistArgs;
