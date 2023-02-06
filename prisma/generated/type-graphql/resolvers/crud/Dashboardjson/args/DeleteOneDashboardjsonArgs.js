"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
let DeleteOneDashboardjsonArgs = class DeleteOneDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], DeleteOneDashboardjsonArgs.prototype, "where", void 0);
DeleteOneDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDashboardjsonArgs);
exports.DeleteOneDashboardjsonArgs = DeleteOneDashboardjsonArgs;
