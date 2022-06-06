"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/CommentsCreateNestedManyWithoutCustomersInput");
const Customer_groupCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateNestedManyWithoutCustomersInput");
const Customer_paymentCreateNestedOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput");
const EmailsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/EmailsCreateNestedManyWithoutCustomersInput");
const Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateNestedManyWithoutCustomersInput");
const OrdersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/OrdersCreateNestedManyWithoutCustomersInput");
const QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput");
const ReturnsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutCustomersInput");
let CustomersCreateWithoutCredit_memosInput = class CustomersCreateWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomersCreateWithoutCredit_memosInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCredit_memosInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCredit_memosInput.prototype, "returns", void 0);
CustomersCreateWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateWithoutCredit_memosInput", {
        isAbstract: true
    })
], CustomersCreateWithoutCredit_memosInput);
exports.CustomersCreateWithoutCredit_memosInput = CustomersCreateWithoutCredit_memosInput;
