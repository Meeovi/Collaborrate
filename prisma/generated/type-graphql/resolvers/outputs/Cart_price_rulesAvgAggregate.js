"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Cart_price_rulesAvgAggregate = class Cart_price_rulesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Cart_price_rulesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesAvgAggregate.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesAvgAggregate.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Cart_price_rulesAvgAggregate.prototype, "actions_discount_qty_step", void 0);
Cart_price_rulesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Cart_price_rulesAvgAggregate", {
        isAbstract: true
    })
], Cart_price_rulesAvgAggregate);
exports.Cart_price_rulesAvgAggregate = Cart_price_rulesAvgAggregate;
