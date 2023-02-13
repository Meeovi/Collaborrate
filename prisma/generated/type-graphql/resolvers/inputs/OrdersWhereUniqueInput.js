"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrdersWhereUniqueInput = class OrdersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersWhereUniqueInput.prototype, "id", void 0);
OrdersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersWhereUniqueInput", {
        isAbstract: true
    })
], OrdersWhereUniqueInput);
exports.OrdersWhereUniqueInput = OrdersWhereUniqueInput;
