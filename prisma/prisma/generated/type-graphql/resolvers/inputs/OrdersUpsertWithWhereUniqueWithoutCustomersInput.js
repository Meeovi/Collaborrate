"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutCustomersInput_1 = require("../inputs/OrdersCreateWithoutCustomersInput");
const OrdersUpdateWithoutCustomersInput_1 = require("../inputs/OrdersUpdateWithoutCustomersInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpsertWithWhereUniqueWithoutCustomersInput = class OrdersUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutCustomersInput_1.OrdersUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutCustomersInput_1.OrdersUpdateWithoutCustomersInput)
], OrdersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput)
], OrdersUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
OrdersUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersUpsertWithWhereUniqueWithoutCustomersInput);
exports.OrdersUpsertWithWhereUniqueWithoutCustomersInput = OrdersUpsertWithWhereUniqueWithoutCustomersInput;
