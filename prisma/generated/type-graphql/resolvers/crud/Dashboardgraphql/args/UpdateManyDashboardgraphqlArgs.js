"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlUpdateManyMutationInput_1 = require("../../../inputs/DashboardgraphqlUpdateManyMutationInput");
const DashboardgraphqlWhereInput_1 = require("../../../inputs/DashboardgraphqlWhereInput");
let UpdateManyDashboardgraphqlArgs = class UpdateManyDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlUpdateManyMutationInput_1.DashboardgraphqlUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlUpdateManyMutationInput_1.DashboardgraphqlUpdateManyMutationInput)
], UpdateManyDashboardgraphqlArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput)
], UpdateManyDashboardgraphqlArgs.prototype, "where", void 0);
UpdateManyDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardgraphqlArgs);
exports.UpdateManyDashboardgraphqlArgs = UpdateManyDashboardgraphqlArgs;
