"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Cart_price_rulesSumAggregate = class Cart_price_rulesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Cart_price_rulesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesSumAggregate.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesSumAggregate.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesSumAggregate.prototype, "actions_discount_qty_step", void 0);
Cart_price_rulesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Cart_price_rulesSumAggregate", {
        isAbstract: true
    })
], Cart_price_rulesSumAggregate);
exports.Cart_price_rulesSumAggregate = Cart_price_rulesSumAggregate;
