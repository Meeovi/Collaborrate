"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Cart_price_rulesScalarFieldEnum;
(function (Cart_price_rulesScalarFieldEnum) {
    Cart_price_rulesScalarFieldEnum["id"] = "id";
    Cart_price_rulesScalarFieldEnum["rule"] = "rule";
    Cart_price_rulesScalarFieldEnum["description"] = "description";
    Cart_price_rulesScalarFieldEnum["active"] = "active";
    Cart_price_rulesScalarFieldEnum["coupon"] = "coupon";
    Cart_price_rulesScalarFieldEnum["uses_per_customer"] = "uses_per_customer";
    Cart_price_rulesScalarFieldEnum["priority"] = "priority";
    Cart_price_rulesScalarFieldEnum["start_date"] = "start_date";
    Cart_price_rulesScalarFieldEnum["end_date"] = "end_date";
    Cart_price_rulesScalarFieldEnum["status"] = "status";
    Cart_price_rulesScalarFieldEnum["website"] = "website";
    Cart_price_rulesScalarFieldEnum["actions_apply"] = "actions_apply";
    Cart_price_rulesScalarFieldEnum["actions_discount_amount"] = "actions_discount_amount";
    Cart_price_rulesScalarFieldEnum["actions_discard_subsequent_rules"] = "actions_discard_subsequent_rules";
    Cart_price_rulesScalarFieldEnum["actions_max_qty_discount_is_applied_to"] = "actions_max_qty_discount_is_applied_to";
    Cart_price_rulesScalarFieldEnum["actions_discount_qty_step"] = "actions_discount_qty_step";
    Cart_price_rulesScalarFieldEnum["actions_apply_shipping_amount"] = "actions_apply_shipping_amount";
})(Cart_price_rulesScalarFieldEnum = exports.Cart_price_rulesScalarFieldEnum || (exports.Cart_price_rulesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Cart_price_rulesScalarFieldEnum, {
    name: "Cart_price_rulesScalarFieldEnum",
    description: undefined,
});
