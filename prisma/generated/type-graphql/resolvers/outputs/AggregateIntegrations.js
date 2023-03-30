"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIntegrations = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsAvgAggregate_1 = require("../outputs/IntegrationsAvgAggregate");
const IntegrationsCountAggregate_1 = require("../outputs/IntegrationsCountAggregate");
const IntegrationsMaxAggregate_1 = require("../outputs/IntegrationsMaxAggregate");
const IntegrationsMinAggregate_1 = require("../outputs/IntegrationsMinAggregate");
const IntegrationsSumAggregate_1 = require("../outputs/IntegrationsSumAggregate");
let AggregateIntegrations = class AggregateIntegrations {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsCountAggregate_1.IntegrationsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsCountAggregate_1.IntegrationsCountAggregate)
], AggregateIntegrations.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsAvgAggregate_1.IntegrationsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsAvgAggregate_1.IntegrationsAvgAggregate)
], AggregateIntegrations.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsSumAggregate_1.IntegrationsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsSumAggregate_1.IntegrationsSumAggregate)
], AggregateIntegrations.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMinAggregate_1.IntegrationsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMinAggregate_1.IntegrationsMinAggregate)
], AggregateIntegrations.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsMaxAggregate_1.IntegrationsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsMaxAggregate_1.IntegrationsMaxAggregate)
], AggregateIntegrations.prototype, "_max", void 0);
AggregateIntegrations = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateIntegrations", {
        isAbstract: true
    })
], AggregateIntegrations);
exports.AggregateIntegrations = AggregateIntegrations;
