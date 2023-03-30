"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsAvgAggregate_1 = require("../outputs/RewardsAvgAggregate");
const RewardsCountAggregate_1 = require("../outputs/RewardsCountAggregate");
const RewardsMaxAggregate_1 = require("../outputs/RewardsMaxAggregate");
const RewardsMinAggregate_1 = require("../outputs/RewardsMinAggregate");
const RewardsSumAggregate_1 = require("../outputs/RewardsSumAggregate");
let RewardsGroupBy = class RewardsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RewardsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RewardsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RewardsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCountAggregate_1.RewardsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsCountAggregate_1.RewardsCountAggregate)
], RewardsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsAvgAggregate_1.RewardsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsAvgAggregate_1.RewardsAvgAggregate)
], RewardsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsSumAggregate_1.RewardsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsSumAggregate_1.RewardsSumAggregate)
], RewardsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMinAggregate_1.RewardsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMinAggregate_1.RewardsMinAggregate)
], RewardsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsMaxAggregate_1.RewardsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsMaxAggregate_1.RewardsMaxAggregate)
], RewardsGroupBy.prototype, "_max", void 0);
RewardsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RewardsGroupBy", {
        isAbstract: true
    })
], RewardsGroupBy);
exports.RewardsGroupBy = RewardsGroupBy;
