"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyProductsInputEnvelope_1 = require("../inputs/OrdersCreateManyProductsInputEnvelope");
const OrdersCreateOrConnectWithoutProductsInput_1 = require("../inputs/OrdersCreateOrConnectWithoutProductsInput");
const OrdersCreateWithoutProductsInput_1 = require("../inputs/OrdersCreateWithoutProductsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateNestedManyWithoutProductsInput = class OrdersCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutProductsInput_1.OrdersCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateManyProductsInputEnvelope_1.OrdersCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateManyProductsInputEnvelope_1.OrdersCreateManyProductsInputEnvelope)
], OrdersCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
OrdersCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], OrdersCreateNestedManyWithoutProductsInput);
exports.OrdersCreateNestedManyWithoutProductsInput = OrdersCreateNestedManyWithoutProductsInput;
