"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonUpdateManyMutationInput_1 = require("../../../inputs/DashboardjsonUpdateManyMutationInput");
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
let UpdateManyDashboardjsonArgs = class UpdateManyDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonUpdateManyMutationInput_1.DashboardjsonUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonUpdateManyMutationInput_1.DashboardjsonUpdateManyMutationInput)
], UpdateManyDashboardjsonArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], UpdateManyDashboardjsonArgs.prototype, "where", void 0);
UpdateManyDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDashboardjsonArgs);
exports.UpdateManyDashboardjsonArgs = UpdateManyDashboardjsonArgs;
