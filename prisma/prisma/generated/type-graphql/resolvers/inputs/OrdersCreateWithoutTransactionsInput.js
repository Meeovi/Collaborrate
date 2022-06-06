"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutOrdersInput");
const ProductsCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductsCreateNestedOneWithoutOrdersInput");
const QuotesCreateNestedManyWithoutOrdersInput_1 = require("../inputs/QuotesCreateNestedManyWithoutOrdersInput");
let OrdersCreateWithoutTransactionsInput = class OrdersCreateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutTransactionsInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateWithoutTransactionsInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutTransactionsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutTransactionsInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutTransactionsInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutTransactionsInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutTransactionsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutTransactionsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutTransactionsInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutTransactionsInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutTransactionsInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutTransactionsInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutTransactionsInput.prototype, "quotes", void 0);
OrdersCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateWithoutTransactionsInput", {
        isAbstract: true
    })
], OrdersCreateWithoutTransactionsInput);
exports.OrdersCreateWithoutTransactionsInput = OrdersCreateWithoutTransactionsInput;
