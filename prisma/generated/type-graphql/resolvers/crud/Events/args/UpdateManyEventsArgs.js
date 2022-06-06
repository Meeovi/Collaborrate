"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEventsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsUpdateManyMutationInput_1 = require("../../../inputs/EventsUpdateManyMutationInput");
const EventsWhereInput_1 = require("../../../inputs/EventsWhereInput");
let UpdateManyEventsArgs = class UpdateManyEventsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsUpdateManyMutationInput_1.EventsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventsUpdateManyMutationInput_1.EventsUpdateManyMutationInput)
], UpdateManyEventsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsWhereInput_1.EventsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsWhereInput_1.EventsWhereInput)
], UpdateManyEventsArgs.prototype, "where", void 0);
UpdateManyEventsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyEventsArgs);
exports.UpdateManyEventsArgs = UpdateManyEventsArgs;
