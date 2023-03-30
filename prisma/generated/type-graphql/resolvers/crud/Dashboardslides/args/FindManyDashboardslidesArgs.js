"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByWithRelationInput_1 = require("../../../inputs/DashboardslidesOrderByWithRelationInput");
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
const DashboardslidesScalarFieldEnum_1 = require("../../../../enums/DashboardslidesScalarFieldEnum");
let FindManyDashboardslidesArgs = class FindManyDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], FindManyDashboardslidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesOrderByWithRelationInput_1.DashboardslidesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardslidesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], FindManyDashboardslidesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardslidesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardslidesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesScalarFieldEnum_1.DashboardslidesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardslidesArgs.prototype, "distinct", void 0);
FindManyDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyDashboardslidesArgs);
exports.FindManyDashboardslidesArgs = FindManyDashboardslidesArgs;
