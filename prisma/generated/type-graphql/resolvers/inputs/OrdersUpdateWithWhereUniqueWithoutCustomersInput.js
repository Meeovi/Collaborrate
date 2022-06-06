"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersUpdateWithoutCustomersInput_1 = require("../inputs/OrdersUpdateWithoutCustomersInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateWithWhereUniqueWithoutCustomersInput = class OrdersUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutCustomersInput_1.OrdersUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutCustomersInput_1.OrdersUpdateWithoutCustomersInput)
], OrdersUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
OrdersUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersUpdateWithWhereUniqueWithoutCustomersInput);
exports.OrdersUpdateWithWhereUniqueWithoutCustomersInput = OrdersUpdateWithWhereUniqueWithoutCustomersInput;
