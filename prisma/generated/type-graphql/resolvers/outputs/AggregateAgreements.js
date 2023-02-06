"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAgreements = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsAvgAggregate_1 = require("../outputs/AgreementsAvgAggregate");
const AgreementsCountAggregate_1 = require("../outputs/AgreementsCountAggregate");
const AgreementsMaxAggregate_1 = require("../outputs/AgreementsMaxAggregate");
const AgreementsMinAggregate_1 = require("../outputs/AgreementsMinAggregate");
const AgreementsSumAggregate_1 = require("../outputs/AgreementsSumAggregate");
let AggregateAgreements = class AggregateAgreements {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCountAggregate_1.AgreementsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsCountAggregate_1.AgreementsCountAggregate)
], AggregateAgreements.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsAvgAggregate_1.AgreementsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsAvgAggregate_1.AgreementsAvgAggregate)
], AggregateAgreements.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsSumAggregate_1.AgreementsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsSumAggregate_1.AgreementsSumAggregate)
], AggregateAgreements.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMinAggregate_1.AgreementsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMinAggregate_1.AgreementsMinAggregate)
], AggregateAgreements.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMaxAggregate_1.AgreementsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMaxAggregate_1.AgreementsMaxAggregate)
], AggregateAgreements.prototype, "_max", void 0);
AggregateAgreements = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAgreements", {
        isAbstract: true
    })
], AggregateAgreements);
exports.AggregateAgreements = AggregateAgreements;
