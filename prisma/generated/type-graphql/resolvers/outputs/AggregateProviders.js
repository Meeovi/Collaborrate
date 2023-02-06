"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProviders = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersAvgAggregate_1 = require("../outputs/ProvidersAvgAggregate");
const ProvidersCountAggregate_1 = require("../outputs/ProvidersCountAggregate");
const ProvidersMaxAggregate_1 = require("../outputs/ProvidersMaxAggregate");
const ProvidersMinAggregate_1 = require("../outputs/ProvidersMinAggregate");
const ProvidersSumAggregate_1 = require("../outputs/ProvidersSumAggregate");
let AggregateProviders = class AggregateProviders {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersCountAggregate_1.ProvidersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersCountAggregate_1.ProvidersCountAggregate)
], AggregateProviders.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersAvgAggregate_1.ProvidersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersAvgAggregate_1.ProvidersAvgAggregate)
], AggregateProviders.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersSumAggregate_1.ProvidersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersSumAggregate_1.ProvidersSumAggregate)
], AggregateProviders.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMinAggregate_1.ProvidersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMinAggregate_1.ProvidersMinAggregate)
], AggregateProviders.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersMaxAggregate_1.ProvidersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersMaxAggregate_1.ProvidersMaxAggregate)
], AggregateProviders.prototype, "_max", void 0);
AggregateProviders = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProviders", {
        isAbstract: true
    })
], AggregateProviders);
exports.AggregateProviders = AggregateProviders;
