"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePolls = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsAvgAggregate_1 = require("../outputs/PollsAvgAggregate");
const PollsCountAggregate_1 = require("../outputs/PollsCountAggregate");
const PollsMaxAggregate_1 = require("../outputs/PollsMaxAggregate");
const PollsMinAggregate_1 = require("../outputs/PollsMinAggregate");
const PollsSumAggregate_1 = require("../outputs/PollsSumAggregate");
let AggregatePolls = class AggregatePolls {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsCountAggregate_1.PollsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsCountAggregate_1.PollsCountAggregate)
], AggregatePolls.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsAvgAggregate_1.PollsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsAvgAggregate_1.PollsAvgAggregate)
], AggregatePolls.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsSumAggregate_1.PollsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsSumAggregate_1.PollsSumAggregate)
], AggregatePolls.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMinAggregate_1.PollsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMinAggregate_1.PollsMinAggregate)
], AggregatePolls.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsMaxAggregate_1.PollsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsMaxAggregate_1.PollsMaxAggregate)
], AggregatePolls.prototype, "_max", void 0);
AggregatePolls = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePolls", {
        isAbstract: true
    })
], AggregatePolls);
exports.AggregatePolls = AggregatePolls;
