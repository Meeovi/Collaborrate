"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
let DeleteEventsArgs = class DeleteEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], DeleteEventsArgs.prototype, "where", void 0);
DeleteEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteEventsArgs);
exports.DeleteEventsArgs = DeleteEventsArgs;
