"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRating = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingAvgAggregate_1 = require("../outputs/RatingAvgAggregate");
const RatingCountAggregate_1 = require("../outputs/RatingCountAggregate");
const RatingMaxAggregate_1 = require("../outputs/RatingMaxAggregate");
const RatingMinAggregate_1 = require("../outputs/RatingMinAggregate");
const RatingSumAggregate_1 = require("../outputs/RatingSumAggregate");
let AggregateRating = class AggregateRating {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCountAggregate_1.RatingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCountAggregate_1.RatingCountAggregate)
], AggregateRating.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingAvgAggregate_1.RatingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingAvgAggregate_1.RatingAvgAggregate)
], AggregateRating.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingSumAggregate_1.RatingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingSumAggregate_1.RatingSumAggregate)
], AggregateRating.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMinAggregate_1.RatingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMinAggregate_1.RatingMinAggregate)
], AggregateRating.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMaxAggregate_1.RatingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMaxAggregate_1.RatingMaxAggregate)
], AggregateRating.prototype, "_max", void 0);
AggregateRating = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRating", {
        isAbstract: true
    })
], AggregateRating);
exports.AggregateRating = AggregateRating;
