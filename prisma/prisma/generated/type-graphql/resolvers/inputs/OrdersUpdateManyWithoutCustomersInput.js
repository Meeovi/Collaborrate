"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyCustomersInputEnvelope_1 = require("../inputs/OrdersCreateManyCustomersInputEnvelope");
const OrdersCreateOrConnectWithoutCustomersInput_1 = require("../inputs/OrdersCreateOrConnectWithoutCustomersInput");
const OrdersCreateWithoutCustomersInput_1 = require("../inputs/OrdersCreateWithoutCustomersInput");
const OrdersScalarWhereInput_1 = require("../inputs/OrdersScalarWhereInput");
const OrdersUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/OrdersUpdateManyWithWhereWithoutCustomersInput");
const OrdersUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/OrdersUpdateWithWhereUniqueWithoutCustomersInput");
const OrdersUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/OrdersUpsertWithWhereUniqueWithoutCustomersInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateManyWithoutCustomersInput = class OrdersUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateWithoutCustomersInput_1.OrdersCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutCustomersInput_1.OrdersCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutCustomersInput_1.OrdersUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateManyCustomersInputEnvelope_1.OrdersCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateManyCustomersInputEnvelope_1.OrdersCreateManyCustomersInputEnvelope)
], OrdersUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutCustomersInput_1.OrdersUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutCustomersInput_1.OrdersUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersScalarWhereInput_1.OrdersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
OrdersUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersUpdateManyWithoutCustomersInput);
exports.OrdersUpdateManyWithoutCustomersInput = OrdersUpdateManyWithoutCustomersInput;
