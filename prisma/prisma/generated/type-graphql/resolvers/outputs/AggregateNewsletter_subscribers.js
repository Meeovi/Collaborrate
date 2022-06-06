"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewsletter_subscribers = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersAvgAggregate_1 = require("../outputs/Newsletter_subscribersAvgAggregate");
const Newsletter_subscribersCountAggregate_1 = require("../outputs/Newsletter_subscribersCountAggregate");
const Newsletter_subscribersMaxAggregate_1 = require("../outputs/Newsletter_subscribersMaxAggregate");
const Newsletter_subscribersMinAggregate_1 = require("../outputs/Newsletter_subscribersMinAggregate");
const Newsletter_subscribersSumAggregate_1 = require("../outputs/Newsletter_subscribersSumAggregate");
let AggregateNewsletter_subscribers = class AggregateNewsletter_subscribers {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCountAggregate_1.Newsletter_subscribersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCountAggregate_1.Newsletter_subscribersCountAggregate)
], AggregateNewsletter_subscribers.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersAvgAggregate_1.Newsletter_subscribersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersAvgAggregate_1.Newsletter_subscribersAvgAggregate)
], AggregateNewsletter_subscribers.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersSumAggregate_1.Newsletter_subscribersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersSumAggregate_1.Newsletter_subscribersSumAggregate)
], AggregateNewsletter_subscribers.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMinAggregate_1.Newsletter_subscribersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMinAggregate_1.Newsletter_subscribersMinAggregate)
], AggregateNewsletter_subscribers.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersMaxAggregate_1.Newsletter_subscribersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersMaxAggregate_1.Newsletter_subscribersMaxAggregate)
], AggregateNewsletter_subscribers.prototype, "_max", void 0);
AggregateNewsletter_subscribers = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateNewsletter_subscribers", {
        isAbstract: true
    })
], AggregateNewsletter_subscribers);
exports.AggregateNewsletter_subscribers = AggregateNewsletter_subscribers;
