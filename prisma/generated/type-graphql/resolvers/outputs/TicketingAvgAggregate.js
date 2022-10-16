"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TicketingAvgAggregate = class TicketingAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TicketingAvgAggregate.prototype, "id", void 0);
TicketingAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TicketingAvgAggregate", {
        isAbstract: true
    })
], TicketingAvgAggregate);
exports.TicketingAvgAggregate = TicketingAvgAggregate;
