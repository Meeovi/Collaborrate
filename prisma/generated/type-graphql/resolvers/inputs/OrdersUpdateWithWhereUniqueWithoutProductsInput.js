"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersUpdateWithoutProductsInput_1 = require("../inputs/OrdersUpdateWithoutProductsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateWithWhereUniqueWithoutProductsInput = class OrdersUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutProductsInput_1.OrdersUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutProductsInput_1.OrdersUpdateWithoutProductsInput)
], OrdersUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
OrdersUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], OrdersUpdateWithWhereUniqueWithoutProductsInput);
exports.OrdersUpdateWithWhereUniqueWithoutProductsInput = OrdersUpdateWithWhereUniqueWithoutProductsInput;
