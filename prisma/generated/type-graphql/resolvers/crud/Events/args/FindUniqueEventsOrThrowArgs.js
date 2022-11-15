"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
let FindUniqueEventsOrThrowArgs = class FindUniqueEventsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], FindUniqueEventsOrThrowArgs.prototype, "where", void 0);
FindUniqueEventsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEventsOrThrowArgs);
exports.FindUniqueEventsOrThrowArgs = FindUniqueEventsOrThrowArgs;
