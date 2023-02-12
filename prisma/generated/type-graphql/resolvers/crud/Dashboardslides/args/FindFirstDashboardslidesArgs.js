"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByWithRelationInput_1 = require("../../../inputs/DashboardslidesOrderByWithRelationInput");
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
const DashboardslidesScalarFieldEnum_1 = require("../../../../enums/DashboardslidesScalarFieldEnum");
let FindFirstDashboardslidesArgs = class FindFirstDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], FindFirstDashboardslidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesOrderByWithRelationInput_1.DashboardslidesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslidesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], FindFirstDashboardslidesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslidesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslidesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesScalarFieldEnum_1.DashboardslidesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslidesArgs.prototype, "distinct", void 0);
FindFirstDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardslidesArgs);
exports.FindFirstDashboardslidesArgs = FindFirstDashboardslidesArgs;
