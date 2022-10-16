"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
let DeleteOneDashboardsArgs = class DeleteOneDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], DeleteOneDashboardsArgs.prototype, "where", void 0);
DeleteOneDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDashboardsArgs);
exports.DeleteOneDashboardsArgs = DeleteOneDashboardsArgs;
