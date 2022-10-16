"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsUpdateInput_1 = require("../../../inputs/EventsUpdateInput");
const EventsWhereUniqueInput_1 = require("../../../inputs/EventsWhereUniqueInput");
let UpdateOneEventsArgs = class UpdateOneEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsUpdateInput_1.EventsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsUpdateInput_1.EventsUpdateInput)
], UpdateOneEventsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereUniqueInput_1.EventsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsWhereUniqueInput_1.EventsWhereUniqueInput)
], UpdateOneEventsArgs.prototype, "where", void 0);
UpdateOneEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneEventsArgs);
exports.UpdateOneEventsArgs = UpdateOneEventsArgs;
