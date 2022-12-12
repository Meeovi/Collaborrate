"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EventsAvgAggregate = class EventsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EventsAvgAggregate.prototype, "id", void 0);
EventsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventsAvgAggregate", {
        isAbstract: true
    })
], EventsAvgAggregate);
exports.EventsAvgAggregate = EventsAvgAggregate;
