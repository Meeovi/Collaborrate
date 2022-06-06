"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsOrderByWithRelationInput_1 = require("../../../inputs/EventsOrderByWithRelationInput");
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
const EventsScalarFieldEnum_1 = require("../../../../enums/EventsScalarFieldEnum");
let FindFirstEventsArgs = class FindFirstEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], FindFirstEventsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsOrderByWithRelationInput_1.EventsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEventsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], FindFirstEventsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEventsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstEventsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsScalarFieldEnum_1.EventsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstEventsArgs.prototype, "distinct", void 0);
FindFirstEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstEventsArgs);
exports.FindFirstEventsArgs = FindFirstEventsArgs;
