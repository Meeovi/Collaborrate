"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMessages = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesAvgAggregate_1 = require("../outputs/MessagesAvgAggregate");
const MessagesCountAggregate_1 = require("../outputs/MessagesCountAggregate");
const MessagesMaxAggregate_1 = require("../outputs/MessagesMaxAggregate");
const MessagesMinAggregate_1 = require("../outputs/MessagesMinAggregate");
const MessagesSumAggregate_1 = require("../outputs/MessagesSumAggregate");
let AggregateMessages = class AggregateMessages {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesCountAggregate_1.MessagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesCountAggregate_1.MessagesCountAggregate)
], AggregateMessages.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesAvgAggregate_1.MessagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesAvgAggregate_1.MessagesAvgAggregate)
], AggregateMessages.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesSumAggregate_1.MessagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesSumAggregate_1.MessagesSumAggregate)
], AggregateMessages.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMinAggregate_1.MessagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMinAggregate_1.MessagesMinAggregate)
], AggregateMessages.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMaxAggregate_1.MessagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMaxAggregate_1.MessagesMaxAggregate)
], AggregateMessages.prototype, "_max", void 0);
AggregateMessages = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMessages", {
        isAbstract: true
    })
], AggregateMessages);
exports.AggregateMessages = AggregateMessages;
