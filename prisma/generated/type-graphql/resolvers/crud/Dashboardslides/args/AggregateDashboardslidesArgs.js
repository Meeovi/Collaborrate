"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByWithRelationInput_1 = require("../../../inputs/DashboardslidesOrderByWithRelationInput");
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
let AggregateDashboardslidesArgs = class AggregateDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], AggregateDashboardslidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesOrderByWithRelationInput_1.DashboardslidesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDashboardslidesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], AggregateDashboardslidesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardslidesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardslidesArgs.prototype, "skip", void 0);
AggregateDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDashboardslidesArgs);
exports.AggregateDashboardslidesArgs = AggregateDashboardslidesArgs;
