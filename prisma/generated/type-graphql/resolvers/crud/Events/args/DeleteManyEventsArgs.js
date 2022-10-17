"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
let DeleteManyEventsArgs = class DeleteManyEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], DeleteManyEventsArgs.prototype, "where", void 0);
DeleteManyEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEventsArgs);
exports.DeleteManyEventsArgs = DeleteManyEventsArgs;
