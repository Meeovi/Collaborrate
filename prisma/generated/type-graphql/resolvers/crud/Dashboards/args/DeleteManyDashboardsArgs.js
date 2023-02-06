"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsWhereInput_1 = require("../../../inputs/DashboardsWhereInput");
let DeleteManyDashboardsArgs = class DeleteManyDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereInput_1.DashboardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsWhereInput_1.DashboardsWhereInput)
], DeleteManyDashboardsArgs.prototype, "where", void 0);
DeleteManyDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDashboardsArgs);
exports.DeleteManyDashboardsArgs = DeleteManyDashboardsArgs;
