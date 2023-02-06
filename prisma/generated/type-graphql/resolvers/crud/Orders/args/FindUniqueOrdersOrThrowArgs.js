"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrdersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersWhereUniqueInput_1 = require("../../../inputs/OrdersWhereUniqueInput");
let FindUniqueOrdersOrThrowArgs = class FindUniqueOrdersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], FindUniqueOrdersOrThrowArgs.prototype, "where", void 0);
FindUniqueOrdersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrdersOrThrowArgs);
exports.FindUniqueOrdersOrThrowArgs = FindUniqueOrdersOrThrowArgs;
