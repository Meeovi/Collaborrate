"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesCreateInput_1 = require("../../../inputs/DashboardslidesCreateInput");
let CreateOneDashboardslidesArgs = class CreateOneDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesCreateInput_1.DashboardslidesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesCreateInput_1.DashboardslidesCreateInput)
], CreateOneDashboardslidesArgs.prototype, "data", void 0);
CreateOneDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardslidesArgs);
exports.CreateOneDashboardslidesArgs = CreateOneDashboardslidesArgs;
