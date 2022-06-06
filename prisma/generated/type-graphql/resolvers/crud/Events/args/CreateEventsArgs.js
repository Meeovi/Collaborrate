"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsCreateInput_1 = require("../../../inputs/EventsCreateInput");
let CreateEventsArgs = class CreateEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCreateInput_1.EventsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsCreateInput_1.EventsCreateInput)
], CreateEventsArgs.prototype, "data", void 0);
CreateEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateEventsArgs);
exports.CreateEventsArgs = CreateEventsArgs;
