"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductsCreateNestedOneWithoutOrdersInput");
const QuotesCreateNestedManyWithoutOrdersInput_1 = require("../inputs/QuotesCreateNestedManyWithoutOrdersInput");
const TransactionsCreateNestedManyWithoutOrdersInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutOrdersInput");
let OrdersCreateWithoutCustomersInput = class OrdersCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutCustomersInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateWithoutCustomersInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutCustomersInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutCustomersInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutCustomersInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutCustomersInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutCustomersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutCustomersInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutCustomersInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutCustomersInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutCustomersInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutCustomersInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutCustomersInput.prototype, "transactions", void 0);
OrdersCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateWithoutCustomersInput", {
        isAbstract: true
    })
], OrdersCreateWithoutCustomersInput);
exports.OrdersCreateWithoutCustomersInput = OrdersCreateWithoutCustomersInput;
