"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateInput_1 = require("../../../inputs/OrdersCreateInput");
const OrdersUpdateInput_1 = require("../../../inputs/OrdersUpdateInput");
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let UpsertOrdersArgs = class UpsertOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], UpsertOrdersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateInput_1.OrdersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateInput_1.OrdersCreateInput)
], UpsertOrdersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateInput_1.OrdersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersUpdateInput_1.OrdersUpdateInput)
], UpsertOrdersArgs.prototype, "update", void 0);
UpsertOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOrdersArgs);
exports.UpsertOrdersArgs = UpsertOrdersArgs;
