"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVisits = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsAvgAggregate_1 = require("../outputs/VisitsAvgAggregate");
const VisitsCountAggregate_1 = require("../outputs/VisitsCountAggregate");
const VisitsMaxAggregate_1 = require("../outputs/VisitsMaxAggregate");
const VisitsMinAggregate_1 = require("../outputs/VisitsMinAggregate");
const VisitsSumAggregate_1 = require("../outputs/VisitsSumAggregate");
let AggregateVisits = class AggregateVisits {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsCountAggregate_1.VisitsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsCountAggregate_1.VisitsCountAggregate)
], AggregateVisits.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsAvgAggregate_1.VisitsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsAvgAggregate_1.VisitsAvgAggregate)
], AggregateVisits.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsSumAggregate_1.VisitsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsSumAggregate_1.VisitsSumAggregate)
], AggregateVisits.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMinAggregate_1.VisitsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMinAggregate_1.VisitsMinAggregate)
], AggregateVisits.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsMaxAggregate_1.VisitsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsMaxAggregate_1.VisitsMaxAggregate)
], AggregateVisits.prototype, "_max", void 0);
AggregateVisits = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVisits", {
        isAbstract: true
    })
], AggregateVisits);
exports.AggregateVisits = AggregateVisits;
