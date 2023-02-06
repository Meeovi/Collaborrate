"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePartners = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersAvgAggregate_1 = require("../outputs/PartnersAvgAggregate");
const PartnersCountAggregate_1 = require("../outputs/PartnersCountAggregate");
const PartnersMaxAggregate_1 = require("../outputs/PartnersMaxAggregate");
const PartnersMinAggregate_1 = require("../outputs/PartnersMinAggregate");
const PartnersSumAggregate_1 = require("../outputs/PartnersSumAggregate");
let AggregatePartners = class AggregatePartners {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersCountAggregate_1.PartnersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersCountAggregate_1.PartnersCountAggregate)
], AggregatePartners.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersAvgAggregate_1.PartnersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersAvgAggregate_1.PartnersAvgAggregate)
], AggregatePartners.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersSumAggregate_1.PartnersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersSumAggregate_1.PartnersSumAggregate)
], AggregatePartners.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMinAggregate_1.PartnersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMinAggregate_1.PartnersMinAggregate)
], AggregatePartners.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMaxAggregate_1.PartnersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMaxAggregate_1.PartnersMaxAggregate)
], AggregatePartners.prototype, "_max", void 0);
AggregatePartners = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePartners", {
        isAbstract: true
    })
], AggregatePartners);
exports.AggregatePartners = AggregatePartners;
