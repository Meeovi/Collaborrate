"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlCreateInput_1 = require("../../../inputs/DashboardgraphqlCreateInput");
let CreateOneDashboardgraphqlArgs = class CreateOneDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlCreateInput_1.DashboardgraphqlCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlCreateInput_1.DashboardgraphqlCreateInput)
], CreateOneDashboardgraphqlArgs.prototype, "data", void 0);
CreateOneDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDashboardgraphqlArgs);
exports.CreateOneDashboardgraphqlArgs = CreateOneDashboardgraphqlArgs;
