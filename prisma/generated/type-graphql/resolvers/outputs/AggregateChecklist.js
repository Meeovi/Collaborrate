"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChecklist = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistAvgAggregate_1 = require("../outputs/ChecklistAvgAggregate");
const ChecklistCountAggregate_1 = require("../outputs/ChecklistCountAggregate");
const ChecklistMaxAggregate_1 = require("../outputs/ChecklistMaxAggregate");
const ChecklistMinAggregate_1 = require("../outputs/ChecklistMinAggregate");
const ChecklistSumAggregate_1 = require("../outputs/ChecklistSumAggregate");
let AggregateChecklist = class AggregateChecklist {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistCountAggregate_1.ChecklistCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistCountAggregate_1.ChecklistCountAggregate)
], AggregateChecklist.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistAvgAggregate_1.ChecklistAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistAvgAggregate_1.ChecklistAvgAggregate)
], AggregateChecklist.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistSumAggregate_1.ChecklistSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistSumAggregate_1.ChecklistSumAggregate)
], AggregateChecklist.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMinAggregate_1.ChecklistMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMinAggregate_1.ChecklistMinAggregate)
], AggregateChecklist.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChecklistMaxAggregate_1.ChecklistMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChecklistMaxAggregate_1.ChecklistMaxAggregate)
], AggregateChecklist.prototype, "_max", void 0);
AggregateChecklist = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateChecklist", {
        isAbstract: true
    })
], AggregateChecklist);
exports.AggregateChecklist = AggregateChecklist;
