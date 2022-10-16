"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Special_discountsAvgAggregate_1 = require("../outputs/Special_discountsAvgAggregate");
const Special_discountsCountAggregate_1 = require("../outputs/Special_discountsCountAggregate");
const Special_discountsMaxAggregate_1 = require("../outputs/Special_discountsMaxAggregate");
const Special_discountsMinAggregate_1 = require("../outputs/Special_discountsMinAggregate");
const Special_discountsSumAggregate_1 = require("../outputs/Special_discountsSumAggregate");
let Special_discountsGroupBy = class Special_discountsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Special_discountsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Special_discountsGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Special_discountsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Special_discountsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsCountAggregate_1.Special_discountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsCountAggregate_1.Special_discountsCountAggregate)
], Special_discountsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsAvgAggregate_1.Special_discountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsAvgAggregate_1.Special_discountsAvgAggregate)
], Special_discountsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsSumAggregate_1.Special_discountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsSumAggregate_1.Special_discountsSumAggregate)
], Special_discountsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMinAggregate_1.Special_discountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMinAggregate_1.Special_discountsMinAggregate)
], Special_discountsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMaxAggregate_1.Special_discountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMaxAggregate_1.Special_discountsMaxAggregate)
], Special_discountsGroupBy.prototype, "_max", void 0);
Special_discountsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Special_discountsGroupBy", {
        isAbstract: true
    })
], Special_discountsGroupBy);
exports.Special_discountsGroupBy = Special_discountsGroupBy;
