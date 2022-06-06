"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Cart_price_rulesAvgAggregate_1 = require("../outputs/Cart_price_rulesAvgAggregate");
const Cart_price_rulesCountAggregate_1 = require("../outputs/Cart_price_rulesCountAggregate");
const Cart_price_rulesMaxAggregate_1 = require("../outputs/Cart_price_rulesMaxAggregate");
const Cart_price_rulesMinAggregate_1 = require("../outputs/Cart_price_rulesMinAggregate");
const Cart_price_rulesSumAggregate_1 = require("../outputs/Cart_price_rulesSumAggregate");
let Cart_price_rulesGroupBy = class Cart_price_rulesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Cart_price_rulesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cart_price_rulesGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "uses_per_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Cart_price_rulesGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Cart_price_rulesGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesGroupBy.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesGroupBy.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cart_price_rulesGroupBy.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesGroupBy.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesGroupBy.prototype, "actions_discount_qty_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cart_price_rulesGroupBy.prototype, "actions_apply_shipping_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesCountAggregate_1.Cart_price_rulesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesCountAggregate_1.Cart_price_rulesCountAggregate)
], Cart_price_rulesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesAvgAggregate_1.Cart_price_rulesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesAvgAggregate_1.Cart_price_rulesAvgAggregate)
], Cart_price_rulesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesSumAggregate_1.Cart_price_rulesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesSumAggregate_1.Cart_price_rulesSumAggregate)
], Cart_price_rulesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMinAggregate_1.Cart_price_rulesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMinAggregate_1.Cart_price_rulesMinAggregate)
], Cart_price_rulesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMaxAggregate_1.Cart_price_rulesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMaxAggregate_1.Cart_price_rulesMaxAggregate)
], Cart_price_rulesGroupBy.prototype, "_max", void 0);
Cart_price_rulesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Cart_price_rulesGroupBy", {
        isAbstract: true
    })
], Cart_price_rulesGroupBy);
exports.Cart_price_rulesGroupBy = Cart_price_rulesGroupBy;
