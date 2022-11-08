"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewsletters = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersAvgAggregate_1 = require("../outputs/NewslettersAvgAggregate");
const NewslettersCountAggregate_1 = require("../outputs/NewslettersCountAggregate");
const NewslettersMaxAggregate_1 = require("../outputs/NewslettersMaxAggregate");
const NewslettersMinAggregate_1 = require("../outputs/NewslettersMinAggregate");
const NewslettersSumAggregate_1 = require("../outputs/NewslettersSumAggregate");
let AggregateNewsletters = class AggregateNewsletters {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersCountAggregate_1.NewslettersCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersCountAggregate_1.NewslettersCountAggregate)
], AggregateNewsletters.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersAvgAggregate_1.NewslettersAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersAvgAggregate_1.NewslettersAvgAggregate)
], AggregateNewsletters.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersSumAggregate_1.NewslettersSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersSumAggregate_1.NewslettersSumAggregate)
], AggregateNewsletters.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMinAggregate_1.NewslettersMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMinAggregate_1.NewslettersMinAggregate)
], AggregateNewsletters.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersMaxAggregate_1.NewslettersMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersMaxAggregate_1.NewslettersMaxAggregate)
], AggregateNewsletters.prototype, "_max", void 0);
AggregateNewsletters = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateNewsletters", {
        isAbstract: true
    })
], AggregateNewsletters);
exports.AggregateNewsletters = AggregateNewsletters;
