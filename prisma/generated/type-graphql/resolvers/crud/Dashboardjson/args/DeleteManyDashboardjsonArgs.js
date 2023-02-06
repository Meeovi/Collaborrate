"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
let DeleteManyDashboardjsonArgs = class DeleteManyDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], DeleteManyDashboardjsonArgs.prototype, "where", void 0);
DeleteManyDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDashboardjsonArgs);
exports.DeleteManyDashboardjsonArgs = DeleteManyDashboardjsonArgs;
