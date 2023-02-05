"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
let DeleteOneDashboardrestapiArgs = class DeleteOneDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], DeleteOneDashboardrestapiArgs.prototype, "where", void 0);
DeleteOneDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDashboardrestapiArgs);
exports.DeleteOneDashboardrestapiArgs = DeleteOneDashboardrestapiArgs;
