"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonCreateManyInput_1 = require("../../../inputs/DashboardjsonCreateManyInput");
let CreateManyDashboardjsonArgs = class CreateManyDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonCreateManyInput_1.DashboardjsonCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardjsonArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardjsonArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardjsonArgs);
exports.CreateManyDashboardjsonArgs = CreateManyDashboardjsonArgs;
