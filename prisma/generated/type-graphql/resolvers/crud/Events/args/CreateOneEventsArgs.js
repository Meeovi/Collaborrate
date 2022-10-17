"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsCreateInput_1 = require("../../../inputs/EventsCreateInput");
let CreateOneEventsArgs = class CreateOneEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCreateInput_1.EventsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsCreateInput_1.EventsCreateInput)
], CreateOneEventsArgs.prototype, "data", void 0);
CreateOneEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneEventsArgs);
exports.CreateOneEventsArgs = CreateOneEventsArgs;
