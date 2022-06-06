"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutProductsInput_1 = require("../inputs/OrdersCreateWithoutProductsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateOrConnectWithoutProductsInput = class OrdersCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput)
], OrdersCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
OrdersCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], OrdersCreateOrConnectWithoutProductsInput);
exports.OrdersCreateOrConnectWithoutProductsInput = OrdersCreateOrConnectWithoutProductsInput;
