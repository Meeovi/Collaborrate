"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateInput_1 = require("../../../inputs/OrdersCreateInput");
const OrdersUpdateInput_1 = require("../../../inputs/OrdersUpdateInput");
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let UpsertOneOrdersArgs = class UpsertOneOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], UpsertOneOrdersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateInput_1.OrdersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateInput_1.OrdersCreateInput)
], UpsertOneOrdersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateInput_1.OrdersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateInput_1.OrdersUpdateInput)
], UpsertOneOrdersArgs.prototype, "update", void 0);
UpsertOneOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOrdersArgs);
exports.UpsertOneOrdersArgs = UpsertOneOrdersArgs;
