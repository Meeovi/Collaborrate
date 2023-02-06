"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistCreateManyInput_1 = require("../../../inputs/DashboardslistCreateManyInput");
let CreateManyDashboardslistArgs = class CreateManyDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistCreateManyInput_1.DashboardslistCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardslistArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardslistArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardslistArgs);
exports.CreateManyDashboardslistArgs = CreateManyDashboardslistArgs;
