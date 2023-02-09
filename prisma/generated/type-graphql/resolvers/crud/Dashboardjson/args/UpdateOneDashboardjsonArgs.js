"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonUpdateInput_1 = require("../../../inputs/DashboardjsonUpdateInput");
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
let UpdateOneDashboardjsonArgs = class UpdateOneDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonUpdateInput_1.DashboardjsonUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonUpdateInput_1.DashboardjsonUpdateInput)
], UpdateOneDashboardjsonArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], UpdateOneDashboardjsonArgs.prototype, "where", void 0);
UpdateOneDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardjsonArgs);
exports.UpdateOneDashboardjsonArgs = UpdateOneDashboardjsonArgs;
