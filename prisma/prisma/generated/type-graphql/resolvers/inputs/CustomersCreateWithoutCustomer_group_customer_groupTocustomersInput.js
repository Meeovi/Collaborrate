"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/CommentsCreateNestedManyWithoutCustomersInput");
const Credit_memosCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutCustomersInput");
const Customer_paymentCreateNestedOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput");
const EmailsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/EmailsCreateNestedManyWithoutCustomersInput");
const Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateNestedManyWithoutCustomersInput");
const OrdersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/OrdersCreateNestedManyWithoutCustomersInput");
const QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput");
const ReturnsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutCustomersInput");
let CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput = class CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput.prototype, "returns", void 0);
CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput", {
        isAbstract: true
    })
], CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput);
exports.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput = CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput;
