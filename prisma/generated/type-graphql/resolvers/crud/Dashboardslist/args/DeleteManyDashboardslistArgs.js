"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
let DeleteManyDashboardslistArgs = class DeleteManyDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], DeleteManyDashboardslistArgs.prototype, "where", void 0);
DeleteManyDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDashboardslistArgs);
exports.DeleteManyDashboardslistArgs = DeleteManyDashboardslistArgs;
