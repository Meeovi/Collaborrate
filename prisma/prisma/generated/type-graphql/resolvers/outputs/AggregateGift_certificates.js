"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGift_certificates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesAvgAggregate_1 = require("../outputs/Gift_certificatesAvgAggregate");
const Gift_certificatesCountAggregate_1 = require("../outputs/Gift_certificatesCountAggregate");
const Gift_certificatesMaxAggregate_1 = require("../outputs/Gift_certificatesMaxAggregate");
const Gift_certificatesMinAggregate_1 = require("../outputs/Gift_certificatesMinAggregate");
const Gift_certificatesSumAggregate_1 = require("../outputs/Gift_certificatesSumAggregate");
let AggregateGift_certificates = class AggregateGift_certificates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCountAggregate_1.Gift_certificatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCountAggregate_1.Gift_certificatesCountAggregate)
], AggregateGift_certificates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesAvgAggregate_1.Gift_certificatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesAvgAggregate_1.Gift_certificatesAvgAggregate)
], AggregateGift_certificates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesSumAggregate_1.Gift_certificatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesSumAggregate_1.Gift_certificatesSumAggregate)
], AggregateGift_certificates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMinAggregate_1.Gift_certificatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMinAggregate_1.Gift_certificatesMinAggregate)
], AggregateGift_certificates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMaxAggregate_1.Gift_certificatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMaxAggregate_1.Gift_certificatesMaxAggregate)
], AggregateGift_certificates.prototype, "_max", void 0);
AggregateGift_certificates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateGift_certificates", {
        isAbstract: true
    })
], AggregateGift_certificates);
exports.AggregateGift_certificates = AggregateGift_certificates;
