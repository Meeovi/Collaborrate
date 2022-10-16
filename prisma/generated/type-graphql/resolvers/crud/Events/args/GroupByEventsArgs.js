"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsOrderByWithAggregationInput_1 = require("../../../inputs/EventsOrderByWithAggregationInput");
const EventsScalarWhereWithAggregatesInput_1 = require("../../../inputs/EventsScalarWhereWithAggregatesInput");
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
const EventsScalarFieldEnum_1 = require("../../../../enums/EventsScalarFieldEnum");
let GroupByEventsArgs = class GroupByEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], GroupByEventsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsOrderByWithAggregationInput_1.EventsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEventsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsScalarFieldEnum_1.EventsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEventsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsScalarWhereWithAggregatesInput_1.EventsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsScalarWhereWithAggregatesInput_1.EventsScalarWhereWithAggregatesInput)
], GroupByEventsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEventsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEventsArgs.prototype, "skip", void 0);
GroupByEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEventsArgs);
exports.GroupByEventsArgs = GroupByEventsArgs;
