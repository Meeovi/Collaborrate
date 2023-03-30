"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
let DeleteManyDashboardslidesArgs = class DeleteManyDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], DeleteManyDashboardslidesArgs.prototype, "where", void 0);
DeleteManyDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyDashboardslidesArgs);
exports.DeleteManyDashboardslidesArgs = DeleteManyDashboardslidesArgs;
