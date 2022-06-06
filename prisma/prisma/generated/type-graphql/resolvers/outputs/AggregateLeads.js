"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLeads = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsAvgAggregate_1 = require("../outputs/LeadsAvgAggregate");
const LeadsCountAggregate_1 = require("../outputs/LeadsCountAggregate");
const LeadsMaxAggregate_1 = require("../outputs/LeadsMaxAggregate");
const LeadsMinAggregate_1 = require("../outputs/LeadsMinAggregate");
const LeadsSumAggregate_1 = require("../outputs/LeadsSumAggregate");
let AggregateLeads = class AggregateLeads {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsCountAggregate_1.LeadsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsCountAggregate_1.LeadsCountAggregate)
], AggregateLeads.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsAvgAggregate_1.LeadsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsAvgAggregate_1.LeadsAvgAggregate)
], AggregateLeads.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsSumAggregate_1.LeadsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsSumAggregate_1.LeadsSumAggregate)
], AggregateLeads.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsMinAggregate_1.LeadsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsMinAggregate_1.LeadsMinAggregate)
], AggregateLeads.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsMaxAggregate_1.LeadsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsMaxAggregate_1.LeadsMaxAggregate)
], AggregateLeads.prototype, "_max", void 0);
AggregateLeads = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLeads", {
        isAbstract: true
    })
], AggregateLeads);
exports.AggregateLeads = AggregateLeads;
