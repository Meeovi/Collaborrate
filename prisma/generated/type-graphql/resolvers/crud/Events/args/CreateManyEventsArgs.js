"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsCreateManyInput_1 = require("../../../inputs/EventsCreateManyInput");
let CreateManyEventsArgs = class CreateManyEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsCreateManyInput_1.EventsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEventsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEventsArgs.prototype, "skipDuplicates", void 0);
CreateManyEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEventsArgs);
exports.CreateManyEventsArgs = CreateManyEventsArgs;
