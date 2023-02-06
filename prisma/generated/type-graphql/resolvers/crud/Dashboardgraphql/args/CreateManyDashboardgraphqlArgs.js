"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlCreateManyInput_1 = require("../../../inputs/DashboardgraphqlCreateManyInput");
let CreateManyDashboardgraphqlArgs = class CreateManyDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlCreateManyInput_1.DashboardgraphqlCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDashboardgraphqlArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDashboardgraphqlArgs.prototype, "skipDuplicates", void 0);
CreateManyDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDashboardgraphqlArgs);
exports.CreateManyDashboardgraphqlArgs = CreateManyDashboardgraphqlArgs;
