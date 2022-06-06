"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutTransactionsInput_1 = require("../inputs/OrdersCreateWithoutTransactionsInput");
const OrdersUpdateWithoutTransactionsInput_1 = require("../inputs/OrdersUpdateWithoutTransactionsInput");
let OrdersUpsertWithoutTransactionsInput = class OrdersUpsertWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutTransactionsInput_1.OrdersUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutTransactionsInput_1.OrdersUpdateWithoutTransactionsInput)
], OrdersUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput)
], OrdersUpsertWithoutTransactionsInput.prototype, "create", void 0);
OrdersUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpsertWithoutTransactionsInput", {
        isAbstract: true
    })
], OrdersUpsertWithoutTransactionsInput);
exports.OrdersUpsertWithoutTransactionsInput = OrdersUpsertWithoutTransactionsInput;
