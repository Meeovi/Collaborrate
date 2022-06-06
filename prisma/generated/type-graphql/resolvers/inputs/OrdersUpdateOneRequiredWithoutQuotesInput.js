"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersUpdateOneRequiredWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/OrdersCreateOrConnectWithoutQuotesInput");
const OrdersCreateWithoutQuotesInput_1 = require("../inputs/OrdersCreateWithoutQuotesInput");
const OrdersUpdateWithoutQuotesInput_1 = require("../inputs/OrdersUpdateWithoutQuotesInput");
const OrdersUpsertWithoutQuotesInput_1 = require("../inputs/OrdersUpsertWithoutQuotesInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersUpdateOneRequiredWithoutQuotesInput = class OrdersUpdateOneRequiredWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutQuotesInput_1.OrdersCreateWithoutQuotesInput)
], OrdersUpdateOneRequiredWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutQuotesInput_1.OrdersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateOrConnectWithoutQuotesInput_1.OrdersCreateOrConnectWithoutQuotesInput)
], OrdersUpdateOneRequiredWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpsertWithoutQuotesInput_1.OrdersUpsertWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpsertWithoutQuotesInput_1.OrdersUpsertWithoutQuotesInput)
], OrdersUpdateOneRequiredWithoutQuotesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersUpdateOneRequiredWithoutQuotesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateWithoutQuotesInput_1.OrdersUpdateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateWithoutQuotesInput_1.OrdersUpdateWithoutQuotesInput)
], OrdersUpdateOneRequiredWithoutQuotesInput.prototype, "update", void 0);
OrdersUpdateOneRequiredWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersUpdateOneRequiredWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersUpdateOneRequiredWithoutQuotesInput);
exports.OrdersUpdateOneRequiredWithoutQuotesInput = OrdersUpdateOneRequiredWithoutQuotesInput;
