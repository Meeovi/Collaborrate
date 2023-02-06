"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsUpdateInput_1 = require("../../../inputs/DashboardsUpdateInput");
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
let UpdateOneDashboardsArgs = class UpdateOneDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsUpdateInput_1.DashboardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsUpdateInput_1.DashboardsUpdateInput)
], UpdateOneDashboardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], UpdateOneDashboardsArgs.prototype, "where", void 0);
UpdateOneDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardsArgs);
exports.UpdateOneDashboardsArgs = UpdateOneDashboardsArgs;
