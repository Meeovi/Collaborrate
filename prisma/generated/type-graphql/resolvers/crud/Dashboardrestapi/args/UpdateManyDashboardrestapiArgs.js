"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiUpdateManyMutationInput_1 = require("../../../inputs/DashboardrestapiUpdateManyMutationInput");
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
let UpdateManyDashboardrestapiArgs = class UpdateManyDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiUpdateManyMutationInput_1.DashboardrestapiUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiUpdateManyMutationInput_1.DashboardrestapiUpdateManyMutationInput)
], UpdateManyDashboardrestapiArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], UpdateManyDashboardrestapiArgs.prototype, "where", void 0);
UpdateManyDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardrestapiArgs);
exports.UpdateManyDashboardrestapiArgs = UpdateManyDashboardrestapiArgs;
