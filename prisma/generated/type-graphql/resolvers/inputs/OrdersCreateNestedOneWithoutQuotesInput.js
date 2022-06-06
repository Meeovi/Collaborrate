"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateNestedOneWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/OrdersCreateOrConnectWithoutQuotesInput");
const OrdersCreateWithoutQuotesInput_1 = require("../inputs/OrdersCreateWithoutQuotesInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateNestedOneWithoutQuotesInput = class OrdersCreateNestedOneWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput)
], OrdersCreateNestedOneWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutQuotesInput_1.OrdersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateOrConnectWithoutQuotesInput_1.OrdersCreateOrConnectWithoutQuotesInput)
], OrdersCreateNestedOneWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateNestedOneWithoutQuotesInput.prototype, "connect", void 0);
OrdersCreateNestedOneWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateNestedOneWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersCreateNestedOneWithoutQuotesInput);
exports.OrdersCreateNestedOneWithoutQuotesInput = OrdersCreateNestedOneWithoutQuotesInput;
