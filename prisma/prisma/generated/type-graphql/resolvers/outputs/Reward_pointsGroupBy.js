"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Reward_pointsAvgAggregate_1 = require("../outputs/Reward_pointsAvgAggregate");
const Reward_pointsCountAggregate_1 = require("../outputs/Reward_pointsCountAggregate");
const Reward_pointsMaxAggregate_1 = require("../outputs/Reward_pointsMaxAggregate");
const Reward_pointsMinAggregate_1 = require("../outputs/Reward_pointsMinAggregate");
const Reward_pointsSumAggregate_1 = require("../outputs/Reward_pointsSumAggregate");
let Reward_pointsGroupBy = class Reward_pointsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Reward_pointsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Reward_pointsGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Reward_pointsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Reward_pointsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Reward_pointsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsCountAggregate_1.Reward_pointsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsCountAggregate_1.Reward_pointsCountAggregate)
], Reward_pointsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsAvgAggregate_1.Reward_pointsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsAvgAggregate_1.Reward_pointsAvgAggregate)
], Reward_pointsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsSumAggregate_1.Reward_pointsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsSumAggregate_1.Reward_pointsSumAggregate)
], Reward_pointsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMinAggregate_1.Reward_pointsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMinAggregate_1.Reward_pointsMinAggregate)
], Reward_pointsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsMaxAggregate_1.Reward_pointsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsMaxAggregate_1.Reward_pointsMaxAggregate)
], Reward_pointsGroupBy.prototype, "_max", void 0);
Reward_pointsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Reward_pointsGroupBy", {
        isAbstract: true
    })
], Reward_pointsGroupBy);
exports.Reward_pointsGroupBy = Reward_pointsGroupBy;
