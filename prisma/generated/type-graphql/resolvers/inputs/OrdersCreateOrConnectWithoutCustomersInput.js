"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutCustomersInput_1 = require("../inputs/OrdersCreateWithoutCustomersInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateOrConnectWithoutCustomersInput = class OrdersCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput)
], OrdersCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
OrdersCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersCreateOrConnectWithoutCustomersInput);
exports.OrdersCreateOrConnectWithoutCustomersInput = OrdersCreateOrConnectWithoutCustomersInput;
