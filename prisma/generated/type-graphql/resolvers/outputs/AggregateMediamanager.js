"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMediamanager = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerAvgAggregate_1 = require("../outputs/MediamanagerAvgAggregate");
const MediamanagerCountAggregate_1 = require("../outputs/MediamanagerCountAggregate");
const MediamanagerMaxAggregate_1 = require("../outputs/MediamanagerMaxAggregate");
const MediamanagerMinAggregate_1 = require("../outputs/MediamanagerMinAggregate");
const MediamanagerSumAggregate_1 = require("../outputs/MediamanagerSumAggregate");
let AggregateMediamanager = class AggregateMediamanager {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerCountAggregate_1.MediamanagerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerCountAggregate_1.MediamanagerCountAggregate)
], AggregateMediamanager.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerAvgAggregate_1.MediamanagerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerAvgAggregate_1.MediamanagerAvgAggregate)
], AggregateMediamanager.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerSumAggregate_1.MediamanagerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerSumAggregate_1.MediamanagerSumAggregate)
], AggregateMediamanager.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMinAggregate_1.MediamanagerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMinAggregate_1.MediamanagerMinAggregate)
], AggregateMediamanager.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMaxAggregate_1.MediamanagerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMaxAggregate_1.MediamanagerMaxAggregate)
], AggregateMediamanager.prototype, "_max", void 0);
AggregateMediamanager = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMediamanager", {
        isAbstract: true
    })
], AggregateMediamanager);
exports.AggregateMediamanager = AggregateMediamanager;
