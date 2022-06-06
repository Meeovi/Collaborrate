"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateOrConnectWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutQuotesInput_1 = require("../inputs/OrdersCreateWithoutQuotesInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateOrConnectWithoutQuotesInput = class OrdersCreateOrConnectWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateOrConnectWithoutQuotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput)
], OrdersCreateOrConnectWithoutQuotesInput.prototype, "create", void 0);
OrdersCreateOrConnectWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateOrConnectWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersCreateOrConnectWithoutQuotesInput);
exports.OrdersCreateOrConnectWithoutQuotesInput = OrdersCreateOrConnectWithoutQuotesInput;
