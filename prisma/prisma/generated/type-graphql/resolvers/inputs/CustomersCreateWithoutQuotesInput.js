"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/CommentsCreateNestedManyWithoutCustomersInput");
const Credit_memosCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutCustomersInput");
const Customer_groupCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateNestedManyWithoutCustomersInput");
const Customer_paymentCreateNestedOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput");
const EmailsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/EmailsCreateNestedManyWithoutCustomersInput");
const Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateNestedManyWithoutCustomersInput");
const OrdersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/OrdersCreateNestedManyWithoutCustomersInput");
const ReturnsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutCustomersInput");
let CustomersCreateWithoutQuotesInput = class CustomersCreateWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomersCreateWithoutQuotesInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutQuotesInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateNestedManyWithoutCustomersInput_1.CommentsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutQuotesInput.prototype, "returns", void 0);
CustomersCreateWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateWithoutQuotesInput", {
        isAbstract: true
    })
], CustomersCreateWithoutQuotesInput);
exports.CustomersCreateWithoutQuotesInput = CustomersCreateWithoutQuotesInput;
