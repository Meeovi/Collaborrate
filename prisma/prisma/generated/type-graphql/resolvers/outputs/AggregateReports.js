"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReports = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsAvgAggregate_1 = require("../outputs/ReportsAvgAggregate");
const ReportsCountAggregate_1 = require("../outputs/ReportsCountAggregate");
const ReportsMaxAggregate_1 = require("../outputs/ReportsMaxAggregate");
const ReportsMinAggregate_1 = require("../outputs/ReportsMinAggregate");
const ReportsSumAggregate_1 = require("../outputs/ReportsSumAggregate");
let AggregateReports = class AggregateReports {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCountAggregate_1.ReportsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsCountAggregate_1.ReportsCountAggregate)
], AggregateReports.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsAvgAggregate_1.ReportsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsAvgAggregate_1.ReportsAvgAggregate)
], AggregateReports.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsSumAggregate_1.ReportsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsSumAggregate_1.ReportsSumAggregate)
], AggregateReports.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMinAggregate_1.ReportsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMinAggregate_1.ReportsMinAggregate)
], AggregateReports.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsMaxAggregate_1.ReportsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsMaxAggregate_1.ReportsMaxAggregate)
], AggregateReports.prototype, "_max", void 0);
AggregateReports = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReports", {
        isAbstract: true
    })
], AggregateReports);
exports.AggregateReports = AggregateReports;
