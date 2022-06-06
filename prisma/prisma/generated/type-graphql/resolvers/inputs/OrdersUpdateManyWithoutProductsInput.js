"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateManyProductsInputEnvelope_1 = require("../inputs/OrdersCreateManyProductsInputEnvelope");
const OrdersCreateOrConnectWithoutProductsInput_1 = require("../inputs/OrdersCreateOrConnectWithoutProductsInput");
const OrdersCreateWithoutProductsInput_1 = require("../inputs/OrdersCreateWithoutProductsInput");
const OrdersScalarWhereInput_1 = require("../inputs/OrdersScalarWhereInput");
const OrdersUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/OrdersUpdateManyWithWhereWithoutProductsInput");
const OrdersUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/OrdersUpdateWithWhereUniqueWithoutProductsInput");
const OrdersUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/OrdersUpsertWithWhereUniqueWithoutProductsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateManyWithoutProductsInput = class OrdersUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateWithoutProductsInput_1.OrdersCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutProductsInput_1.OrdersCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutProductsInput_1.OrdersUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateManyProductsInputEnvelope_1.OrdersCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateManyProductsInputEnvelope_1.OrdersCreateManyProductsInputEnvelope)
], OrdersUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereUniqueInput_1.OrdersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutProductsInput_1.OrdersUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutProductsInput_1.OrdersUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersScalarWhereInput_1.OrdersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
OrdersUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], OrdersUpdateManyWithoutProductsInput);
exports.OrdersUpdateManyWithoutProductsInput = OrdersUpdateManyWithoutProductsInput;
