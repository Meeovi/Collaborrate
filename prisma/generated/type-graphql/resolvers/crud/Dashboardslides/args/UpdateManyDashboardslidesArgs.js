"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesUpdateManyMutationInput_1 = require("../../../inputs/DashboardslidesUpdateManyMutationInput");
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
let UpdateManyDashboardslidesArgs = class UpdateManyDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesUpdateManyMutationInput_1.DashboardslidesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesUpdateManyMutationInput_1.DashboardslidesUpdateManyMutationInput)
], UpdateManyDashboardslidesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], UpdateManyDashboardslidesArgs.prototype, "where", void 0);
UpdateManyDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardslidesArgs);
exports.UpdateManyDashboardslidesArgs = UpdateManyDashboardslidesArgs;
