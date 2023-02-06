"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesAvgAggregate_1 = require("../outputs/DashboardslidesAvgAggregate");
const DashboardslidesCountAggregate_1 = require("../outputs/DashboardslidesCountAggregate");
const DashboardslidesMaxAggregate_1 = require("../outputs/DashboardslidesMaxAggregate");
const DashboardslidesMinAggregate_1 = require("../outputs/DashboardslidesMinAggregate");
const DashboardslidesSumAggregate_1 = require("../outputs/DashboardslidesSumAggregate");
let DashboardslidesGroupBy = class DashboardslidesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesCountAggregate_1.DashboardslidesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesCountAggregate_1.DashboardslidesCountAggregate)
], DashboardslidesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesAvgAggregate_1.DashboardslidesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesAvgAggregate_1.DashboardslidesAvgAggregate)
], DashboardslidesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesSumAggregate_1.DashboardslidesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesSumAggregate_1.DashboardslidesSumAggregate)
], DashboardslidesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMinAggregate_1.DashboardslidesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMinAggregate_1.DashboardslidesMinAggregate)
], DashboardslidesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMaxAggregate_1.DashboardslidesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMaxAggregate_1.DashboardslidesMaxAggregate)
], DashboardslidesGroupBy.prototype, "_max", void 0);
DashboardslidesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesGroupBy", {
        isAbstract: true
    })
], DashboardslidesGroupBy);
exports.DashboardslidesGroupBy = DashboardslidesGroupBy;
