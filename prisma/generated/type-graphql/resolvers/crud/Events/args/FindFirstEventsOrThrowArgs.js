"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/EventsOrderByWithRelationAndSearchRelevanceInput");
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
const EventsScalarFieldEnum_1 = require("../../../../enums/EventsScalarFieldEnum");
let FindFirstEventsOrThrowArgs = class FindFirstEventsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], FindFirstEventsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsOrderByWithRelationAndSearchRelevanceInput_1.EventsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEventsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], FindFirstEventsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEventsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEventsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsScalarFieldEnum_1.EventsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEventsOrThrowArgs.prototype, "distinct", void 0);
FindFirstEventsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEventsOrThrowArgs);
exports.FindFirstEventsOrThrowArgs = FindFirstEventsOrThrowArgs;
