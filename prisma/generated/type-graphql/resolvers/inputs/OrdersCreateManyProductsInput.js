"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrdersCreateManyProductsInput = class OrdersCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateManyProductsInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrdersCreateManyProductsInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateManyProductsInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateManyProductsInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateManyProductsInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateManyProductsInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateManyProductsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdersCreateManyProductsInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateManyProductsInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersCreateManyProductsInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrdersCreateManyProductsInput.prototype, "cust_id", void 0);
OrdersCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateManyProductsInput", {
        isAbstract: true
    })
], OrdersCreateManyProductsInput);
exports.OrdersCreateManyProductsInput = OrdersCreateManyProductsInput;
