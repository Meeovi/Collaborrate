"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTrainings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsAvgAggregate_1 = require("../outputs/TrainingsAvgAggregate");
const TrainingsCountAggregate_1 = require("../outputs/TrainingsCountAggregate");
const TrainingsMaxAggregate_1 = require("../outputs/TrainingsMaxAggregate");
const TrainingsMinAggregate_1 = require("../outputs/TrainingsMinAggregate");
const TrainingsSumAggregate_1 = require("../outputs/TrainingsSumAggregate");
let AggregateTrainings = class AggregateTrainings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsCountAggregate_1.TrainingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsCountAggregate_1.TrainingsCountAggregate)
], AggregateTrainings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsAvgAggregate_1.TrainingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsAvgAggregate_1.TrainingsAvgAggregate)
], AggregateTrainings.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsSumAggregate_1.TrainingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsSumAggregate_1.TrainingsSumAggregate)
], AggregateTrainings.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsMinAggregate_1.TrainingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsMinAggregate_1.TrainingsMinAggregate)
], AggregateTrainings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsMaxAggregate_1.TrainingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsMaxAggregate_1.TrainingsMaxAggregate)
], AggregateTrainings.prototype, "_max", void 0);
AggregateTrainings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTrainings", {
        isAbstract: true
    })
], AggregateTrainings);
exports.AggregateTrainings = AggregateTrainings;
