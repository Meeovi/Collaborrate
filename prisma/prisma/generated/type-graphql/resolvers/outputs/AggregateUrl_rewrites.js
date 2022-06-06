"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUrl_rewrites = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesAvgAggregate_1 = require("../outputs/Url_rewritesAvgAggregate");
const Url_rewritesCountAggregate_1 = require("../outputs/Url_rewritesCountAggregate");
const Url_rewritesMaxAggregate_1 = require("../outputs/Url_rewritesMaxAggregate");
const Url_rewritesMinAggregate_1 = require("../outputs/Url_rewritesMinAggregate");
const Url_rewritesSumAggregate_1 = require("../outputs/Url_rewritesSumAggregate");
let AggregateUrl_rewrites = class AggregateUrl_rewrites {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCountAggregate_1.Url_rewritesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesCountAggregate_1.Url_rewritesCountAggregate)
], AggregateUrl_rewrites.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesAvgAggregate_1.Url_rewritesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesAvgAggregate_1.Url_rewritesAvgAggregate)
], AggregateUrl_rewrites.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesSumAggregate_1.Url_rewritesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesSumAggregate_1.Url_rewritesSumAggregate)
], AggregateUrl_rewrites.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMinAggregate_1.Url_rewritesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMinAggregate_1.Url_rewritesMinAggregate)
], AggregateUrl_rewrites.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesMaxAggregate_1.Url_rewritesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesMaxAggregate_1.Url_rewritesMaxAggregate)
], AggregateUrl_rewrites.prototype, "_max", void 0);
AggregateUrl_rewrites = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUrl_rewrites", {
        isAbstract: true
    })
], AggregateUrl_rewrites);
exports.AggregateUrl_rewrites = AggregateUrl_rewrites;
