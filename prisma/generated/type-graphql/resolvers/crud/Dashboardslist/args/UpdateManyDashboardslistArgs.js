"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistUpdateManyMutationInput_1 = require("../../../inputs/DashboardslistUpdateManyMutationInput");
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
let UpdateManyDashboardslistArgs = class UpdateManyDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistUpdateManyMutationInput_1.DashboardslistUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistUpdateManyMutationInput_1.DashboardslistUpdateManyMutationInput)
], UpdateManyDashboardslistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], UpdateManyDashboardslistArgs.prototype, "where", void 0);
UpdateManyDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardslistArgs);
exports.UpdateManyDashboardslistArgs = UpdateManyDashboardslistArgs;
