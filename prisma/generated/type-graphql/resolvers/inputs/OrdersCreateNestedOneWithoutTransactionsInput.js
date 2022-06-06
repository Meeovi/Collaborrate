"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/OrdersCreateOrConnectWithoutTransactionsInput");
const OrdersCreateWithoutTransactionsInput_1 = require("../inputs/OrdersCreateWithoutTransactionsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateNestedOneWithoutTransactionsInput = class OrdersCreateNestedOneWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput)
], OrdersCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutTransactionsInput_1.OrdersCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateOrConnectWithoutTransactionsInput_1.OrdersCreateOrConnectWithoutTransactionsInput)
], OrdersCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
OrdersCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateNestedOneWithoutTransactionsInput", {
        isAbstract: true
    })
], OrdersCreateNestedOneWithoutTransactionsInput);
exports.OrdersCreateNestedOneWithoutTransactionsInput = OrdersCreateNestedOneWithoutTransactionsInput;
