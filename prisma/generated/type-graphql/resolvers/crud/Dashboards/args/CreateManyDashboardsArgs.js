"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsCreateManyInput_1 = require("../../../inputs/DashboardsCreateManyInput");
let CreateManyDashboardsArgs = class CreateManyDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsCreateManyInput_1.DashboardsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardsArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardsArgs);
exports.CreateManyDashboardsArgs = CreateManyDashboardsArgs;
