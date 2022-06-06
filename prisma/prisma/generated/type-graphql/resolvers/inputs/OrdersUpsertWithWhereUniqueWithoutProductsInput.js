"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutProductsInput_1 = require("../inputs/OrdersCreateWithoutProductsInput");
const OrdersUpdateWithoutProductsInput_1 = require("../inputs/OrdersUpdateWithoutProductsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpsertWithWhereUniqueWithoutProductsInput = class OrdersUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutProductsInput_1.OrdersUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutProductsInput_1.OrdersUpdateWithoutProductsInput)
], OrdersUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput)
], OrdersUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
OrdersUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], OrdersUpsertWithWhereUniqueWithoutProductsInput);
exports.OrdersUpsertWithWhereUniqueWithoutProductsInput = OrdersUpsertWithWhereUniqueWithoutProductsInput;
