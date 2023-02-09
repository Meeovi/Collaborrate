"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiCreateManyInput_1 = require("../../../inputs/DashboardrestapiCreateManyInput");
let CreateManyDashboardrestapiArgs = class CreateManyDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiCreateManyInput_1.DashboardrestapiCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardrestapiArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardrestapiArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardrestapiArgs);
exports.CreateManyDashboardrestapiArgs = CreateManyDashboardrestapiArgs;
