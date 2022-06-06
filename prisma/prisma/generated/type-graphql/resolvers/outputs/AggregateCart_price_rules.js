"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCart_price_rules = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesAvgAggregate_1 = require("../outputs/Cart_price_rulesAvgAggregate");
const Cart_price_rulesCountAggregate_1 = require("../outputs/Cart_price_rulesCountAggregate");
const Cart_price_rulesMaxAggregate_1 = require("../outputs/Cart_price_rulesMaxAggregate");
const Cart_price_rulesMinAggregate_1 = require("../outputs/Cart_price_rulesMinAggregate");
const Cart_price_rulesSumAggregate_1 = require("../outputs/Cart_price_rulesSumAggregate");
let AggregateCart_price_rules = class AggregateCart_price_rules {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesCountAggregate_1.Cart_price_rulesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesCountAggregate_1.Cart_price_rulesCountAggregate)
], AggregateCart_price_rules.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesAvgAggregate_1.Cart_price_rulesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesAvgAggregate_1.Cart_price_rulesAvgAggregate)
], AggregateCart_price_rules.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesSumAggregate_1.Cart_price_rulesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesSumAggregate_1.Cart_price_rulesSumAggregate)
], AggregateCart_price_rules.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMinAggregate_1.Cart_price_rulesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMinAggregate_1.Cart_price_rulesMinAggregate)
], AggregateCart_price_rules.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesMaxAggregate_1.Cart_price_rulesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesMaxAggregate_1.Cart_price_rulesMaxAggregate)
], AggregateCart_price_rules.prototype, "_max", void 0);
AggregateCart_price_rules = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCart_price_rules", {
        isAbstract: true
    })
], AggregateCart_price_rules);
exports.AggregateCart_price_rules = AggregateCart_price_rules;
