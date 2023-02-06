"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsUpdateManyMutationInput_1 = require("../../../inputs/DashboardsUpdateManyMutationInput");
const DashboardsWhereInput_1 = require("../../../inputs/DashboardsWhereInput");
let UpdateManyDashboardsArgs = class UpdateManyDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsUpdateManyMutationInput_1.DashboardsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsUpdateManyMutationInput_1.DashboardsUpdateManyMutationInput)
], UpdateManyDashboardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereInput_1.DashboardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsWhereInput_1.DashboardsWhereInput)
], UpdateManyDashboardsArgs.prototype, "where", void 0);
UpdateManyDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardsArgs);
exports.UpdateManyDashboardsArgs = UpdateManyDashboardsArgs;
