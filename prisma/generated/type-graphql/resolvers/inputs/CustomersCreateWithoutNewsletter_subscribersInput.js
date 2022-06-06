"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateWithoutNewsletter_subscribersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/CommentsCreateNestedManyWithoutCustomersInput");
const Credit_memosCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutCustomersInput");
const Customer_groupCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateNestedManyWithoutCustomersInput");
const Customer_paymentCreateNestedOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput");
const EmailsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/EmailsCreateNestedManyWithoutCustomersInput");
const OrdersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/OrdersCreateNestedManyWithoutCustomersInput");
const QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput");
const ReturnsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutCustomersInput");
let CustomersCreateWithoutNewsletter_subscribersInput = class CustomersCreateWithoutNewsletter_subscribersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutNewsletter_subscribersInput.prototype, "returns", void 0);
CustomersCreateWithoutNewsletter_subscribersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateWithoutNewsletter_subscribersInput", {
        isAbstract: true
    })
], CustomersCreateWithoutNewsletter_subscribersInput);
exports.CustomersCreateWithoutNewsletter_subscribersInput = CustomersCreateWithoutNewsletter_subscribersInput;
