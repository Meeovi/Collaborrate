"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistCreateInput_1 = require("../../../inputs/DashboardslistCreateInput");
const DashboardslistUpdateInput_1 = require("../../../inputs/DashboardslistUpdateInput");
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
let UpsertOneDashboardslistArgs = class UpsertOneDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], UpsertOneDashboardslistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistCreateInput_1.DashboardslistCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistCreateInput_1.DashboardslistCreateInput)
], UpsertOneDashboardslistArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistUpdateInput_1.DashboardslistUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistUpdateInput_1.DashboardslistUpdateInput)
], UpsertOneDashboardslistArgs.prototype, "update", void 0);
UpsertOneDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardslistArgs);
exports.UpsertOneDashboardslistArgs = UpsertOneDashboardslistArgs;
