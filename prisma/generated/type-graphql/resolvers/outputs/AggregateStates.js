"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesAvgAggregate_1 = require("../outputs/StatesAvgAggregate");
const StatesCountAggregate_1 = require("../outputs/StatesCountAggregate");
const StatesMaxAggregate_1 = require("../outputs/StatesMaxAggregate");
const StatesMinAggregate_1 = require("../outputs/StatesMinAggregate");
const StatesSumAggregate_1 = require("../outputs/StatesSumAggregate");
let AggregateStates = class AggregateStates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesCountAggregate_1.StatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesCountAggregate_1.StatesCountAggregate)
], AggregateStates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesAvgAggregate_1.StatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesAvgAggregate_1.StatesAvgAggregate)
], AggregateStates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesSumAggregate_1.StatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesSumAggregate_1.StatesSumAggregate)
], AggregateStates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMinAggregate_1.StatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMinAggregate_1.StatesMinAggregate)
], AggregateStates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesMaxAggregate_1.StatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesMaxAggregate_1.StatesMaxAggregate)
], AggregateStates.prototype, "_max", void 0);
AggregateStates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStates", {
        isAbstract: true
    })
], AggregateStates);
exports.AggregateStates = AggregateStates;
