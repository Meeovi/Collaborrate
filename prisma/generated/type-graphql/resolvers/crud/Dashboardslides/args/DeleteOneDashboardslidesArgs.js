"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
let DeleteOneDashboardslidesArgs = class DeleteOneDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], DeleteOneDashboardslidesArgs.prototype, "where", void 0);
DeleteOneDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDashboardslidesArgs);
exports.DeleteOneDashboardslidesArgs = DeleteOneDashboardslidesArgs;
