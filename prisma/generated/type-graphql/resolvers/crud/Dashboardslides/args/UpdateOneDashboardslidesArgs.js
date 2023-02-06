"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesUpdateInput_1 = require("../../../inputs/DashboardslidesUpdateInput");
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
let UpdateOneDashboardslidesArgs = class UpdateOneDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesUpdateInput_1.DashboardslidesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesUpdateInput_1.DashboardslidesUpdateInput)
], UpdateOneDashboardslidesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], UpdateOneDashboardslidesArgs.prototype, "where", void 0);
UpdateOneDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardslidesArgs);
exports.UpdateOneDashboardslidesArgs = UpdateOneDashboardslidesArgs;
