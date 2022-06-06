"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutOrdersInput");
const ProductsCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductsCreateNestedOneWithoutOrdersInput");
const TransactionsCreateNestedManyWithoutOrdersInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutOrdersInput");
let OrdersCreateWithoutQuotesInput = class OrdersCreateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutQuotesInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateWithoutQuotesInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutQuotesInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutQuotesInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutQuotesInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateWithoutQuotesInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutQuotesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateWithoutQuotesInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutQuotesInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateWithoutQuotesInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutQuotesInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput)
], OrdersCreateWithoutQuotesInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput)
], OrdersCreateWithoutQuotesInput.prototype, "transactions", void 0);
OrdersCreateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateWithoutQuotesInput", {
        isAbstract: true
    })
], OrdersCreateWithoutQuotesInput);
exports.OrdersCreateWithoutQuotesInput = OrdersCreateWithoutQuotesInput;
