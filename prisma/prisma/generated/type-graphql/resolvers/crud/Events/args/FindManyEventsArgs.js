"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsOrderByWithRelationInput_1 = require("../../../inputs/EventsOrderByWithRelationInput");
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
const EventsScalarFieldEnum_1 = require("../../../../enums/EventsScalarFieldEnum");
let FindManyEventsArgs = class FindManyEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], FindManyEventsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsOrderByWithRelationInput_1.EventsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEventsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], FindManyEventsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEventsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEventsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsScalarFieldEnum_1.EventsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEventsArgs.prototype, "distinct", void 0);
FindManyEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEventsArgs);
exports.FindManyEventsArgs = FindManyEventsArgs;
