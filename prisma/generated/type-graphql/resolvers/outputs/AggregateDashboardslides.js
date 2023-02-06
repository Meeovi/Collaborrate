"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslides = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesAvgAggregate_1 = require("../outputs/DashboardslidesAvgAggregate");
const DashboardslidesCountAggregate_1 = require("../outputs/DashboardslidesCountAggregate");
const DashboardslidesMaxAggregate_1 = require("../outputs/DashboardslidesMaxAggregate");
const DashboardslidesMinAggregate_1 = require("../outputs/DashboardslidesMinAggregate");
const DashboardslidesSumAggregate_1 = require("../outputs/DashboardslidesSumAggregate");
let AggregateDashboardslides = class AggregateDashboardslides {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesCountAggregate_1.DashboardslidesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesCountAggregate_1.DashboardslidesCountAggregate)
], AggregateDashboardslides.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesAvgAggregate_1.DashboardslidesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesAvgAggregate_1.DashboardslidesAvgAggregate)
], AggregateDashboardslides.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesSumAggregate_1.DashboardslidesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesSumAggregate_1.DashboardslidesSumAggregate)
], AggregateDashboardslides.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMinAggregate_1.DashboardslidesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMinAggregate_1.DashboardslidesMinAggregate)
], AggregateDashboardslides.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMaxAggregate_1.DashboardslidesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMaxAggregate_1.DashboardslidesMaxAggregate)
], AggregateDashboardslides.prototype, "_max", void 0);
AggregateDashboardslides = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboardslides", {
        isAbstract: true
    })
], AggregateDashboardslides);
exports.AggregateDashboardslides = AggregateDashboardslides;
