"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutOrdersInput");
const ProductsCreateNestedOneWithoutOrdersInput_1 = require("../inputs/ProductsCreateNestedOneWithoutOrdersInput");
const QuotesCreateNestedManyWithoutOrdersInput_1 = require("../inputs/QuotesCreateNestedManyWithoutOrdersInput");
const TransactionsCreateNestedManyWithoutOrdersInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutOrdersInput");
let OrdersCreateInput = class OrdersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutOrdersInput_1.CustomersCreateNestedOneWithoutOrdersInput)
], OrdersCreateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutOrdersInput_1.ProductsCreateNestedOneWithoutOrdersInput)
], OrdersCreateInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutOrdersInput_1.QuotesCreateNestedManyWithoutOrdersInput)
], OrdersCreateInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutOrdersInput_1.TransactionsCreateNestedManyWithoutOrdersInput)
], OrdersCreateInput.prototype, "transactions", void 0);
OrdersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateInput", {
        isAbstract: true
    })
], OrdersCreateInput);
exports.OrdersCreateInput = OrdersCreateInput;
