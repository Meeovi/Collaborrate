"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutOrdersInput");
const QuotesCreateNestedManyWithoutOrdersInput_1 = require("../inputs/QuotesCreateNestedManyWithoutOrdersInput");
const TransactionsCreateNestedManyWithoutOrdersInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutOrdersInput");
let OrdersCreateWithoutProductsInput = class OrdersCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutProductsInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateWithoutProductsInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutProductsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutProductsInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutProductsInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutProductsInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutProductsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutProductsInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutProductsInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutProductsInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutProductsInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutProductsInput.prototype, "transactions", void 0);
OrdersCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateWithoutProductsInput", {
        isAbstract: true
    })
], OrdersCreateWithoutProductsInput);
exports.OrdersCreateWithoutProductsInput = OrdersCreateWithoutProductsInput;
