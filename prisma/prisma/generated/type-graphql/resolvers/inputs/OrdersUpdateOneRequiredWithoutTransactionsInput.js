"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateOneRequiredWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/OrdersCreateOrConnectWithoutTransactionsInput");
const OrdersCreateWithoutTransactionsInput_1 = require("../inputs/OrdersCreateWithoutTransactionsInput");
const OrdersUpdateWithoutTransactionsInput_1 = require("../inputs/OrdersUpdateWithoutTransactionsInput");
const OrdersUpsertWithoutTransactionsInput_1 = require("../inputs/OrdersUpsertWithoutTransactionsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateOneRequiredWithoutTransactionsInput = class OrdersUpdateOneRequiredWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput)
], OrdersUpdateOneRequiredWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutTransactionsInput_1.OrdersCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateOrConnectWithoutTransactionsInput_1.OrdersCreateOrConnectWithoutTransactionsInput)
], OrdersUpdateOneRequiredWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpsertWithoutTransactionsInput_1.OrdersUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpsertWithoutTransactionsInput_1.OrdersUpsertWithoutTransactionsInput)
], OrdersUpdateOneRequiredWithoutTransactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpdateOneRequiredWithoutTransactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutTransactionsInput_1.OrdersUpdateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutTransactionsInput_1.OrdersUpdateWithoutTransactionsInput)
], OrdersUpdateOneRequiredWithoutTransactionsInput.prototype, "update", void 0);
OrdersUpdateOneRequiredWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateOneRequiredWithoutTransactionsInput", {
        isAbstract: true
    })
], OrdersUpdateOneRequiredWithoutTransactionsInput);
exports.OrdersUpdateOneRequiredWithoutTransactionsInput = OrdersUpdateOneRequiredWithoutTransactionsInput;
