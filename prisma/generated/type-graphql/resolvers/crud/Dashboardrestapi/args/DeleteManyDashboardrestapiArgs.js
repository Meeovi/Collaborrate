"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
let DeleteManyDashboardrestapiArgs = class DeleteManyDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], DeleteManyDashboardrestapiArgs.prototype, "where", void 0);
DeleteManyDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDashboardrestapiArgs);
exports.DeleteManyDashboardrestapiArgs = DeleteManyDashboardrestapiArgs;
