"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsCreateInput_1 = require("../../../inputs/EventsCreateInput");
const EventsUpdateInput_1 = require("../../../inputs/EventsUpdateInput");
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
let UpsertOneEventsArgs = class UpsertOneEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], UpsertOneEventsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCreateInput_1.EventsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsCreateInput_1.EventsCreateInput)
], UpsertOneEventsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsUpdateInput_1.EventsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsUpdateInput_1.EventsUpdateInput)
], UpsertOneEventsArgs.prototype, "update", void 0);
UpsertOneEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneEventsArgs);
exports.UpsertOneEventsArgs = UpsertOneEventsArgs;
