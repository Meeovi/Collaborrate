"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWebhooks = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksAvgAggregate_1 = require("../outputs/WebhooksAvgAggregate");
const WebhooksCountAggregate_1 = require("../outputs/WebhooksCountAggregate");
const WebhooksMaxAggregate_1 = require("../outputs/WebhooksMaxAggregate");
const WebhooksMinAggregate_1 = require("../outputs/WebhooksMinAggregate");
const WebhooksSumAggregate_1 = require("../outputs/WebhooksSumAggregate");
let AggregateWebhooks = class AggregateWebhooks {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksCountAggregate_1.WebhooksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksCountAggregate_1.WebhooksCountAggregate)
], AggregateWebhooks.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksAvgAggregate_1.WebhooksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksAvgAggregate_1.WebhooksAvgAggregate)
], AggregateWebhooks.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksSumAggregate_1.WebhooksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksSumAggregate_1.WebhooksSumAggregate)
], AggregateWebhooks.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMinAggregate_1.WebhooksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMinAggregate_1.WebhooksMinAggregate)
], AggregateWebhooks.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMaxAggregate_1.WebhooksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMaxAggregate_1.WebhooksMaxAggregate)
], AggregateWebhooks.prototype, "_max", void 0);
AggregateWebhooks = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWebhooks", {
        isAbstract: true
    })
], AggregateWebhooks);
exports.AggregateWebhooks = AggregateWebhooks;
