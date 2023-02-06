"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonCreateInput_1 = require("../../../inputs/DashboardjsonCreateInput");
let CreateOneDashboardjsonArgs = class CreateOneDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonCreateInput_1.DashboardjsonCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonCreateInput_1.DashboardjsonCreateInput)
], CreateOneDashboardjsonArgs.prototype, "data", void 0);
CreateOneDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardjsonArgs);
exports.CreateOneDashboardjsonArgs = CreateOneDashboardjsonArgs;
