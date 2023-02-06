"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesCreateManyInput_1 = require("../../../inputs/DashboardslidesCreateManyInput");
let CreateManyDashboardslidesArgs = class CreateManyDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesCreateManyInput_1.DashboardslidesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardslidesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardslidesArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardslidesArgs);
exports.CreateManyDashboardslidesArgs = CreateManyDashboardslidesArgs;
