"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyCustomersInputEnvelope_1 = require("../inputs/OrdersCreateManyCustomersInputEnvelope");
const OrdersCreateOrConnectWithoutCustomersInput_1 = require("../inputs/OrdersCreateOrConnectWithoutCustomersInput");
const OrdersCreateWithoutCustomersInput_1 = require("../inputs/OrdersCreateWithoutCustomersInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateNestedManyWithoutCustomersInput = class OrdersCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutCustomersInput_1.OrdersCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateManyCustomersInputEnvelope_1.OrdersCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateManyCustomersInputEnvelope_1.OrdersCreateManyCustomersInputEnvelope)
], OrdersCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
OrdersCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersCreateNestedManyWithoutCustomersInput);
exports.OrdersCreateNestedManyWithoutCustomersInput = OrdersCreateNestedManyWithoutCustomersInput;
