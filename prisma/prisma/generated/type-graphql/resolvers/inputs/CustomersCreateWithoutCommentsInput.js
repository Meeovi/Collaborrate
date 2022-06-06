"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutCustomersInput");
const Customer_groupCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateNestedManyWithoutCustomersInput");
const Customer_paymentCreateNestedOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput");
const EmailsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/EmailsCreateNestedManyWithoutCustomersInput");
const Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateNestedManyWithoutCustomersInput");
const OrdersCreateNestedManyWithoutCustomersInput_1 = require("../inputs/OrdersCreateNestedManyWithoutCustomersInput");
const QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput");
const ReturnsCreateNestedManyWithoutCustomersInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutCustomersInput");
let CustomersCreateWithoutCommentsInput = class CustomersCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CustomersCreateWithoutCommentsInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersCreateWithoutCommentsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutCustomersInput_1.Credit_memosCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateNestedManyWithoutCustomersInput_1.Customer_groupCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutCustomersInput_1.Customer_paymentCreateNestedOneWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateNestedManyWithoutCustomersInput_1.EmailsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateNestedManyWithoutCustomersInput_1.Newsletter_subscribersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutCustomersInput_1.OrdersCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutCustomers_customersToquotesInput_1.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput)
], CustomersCreateWithoutCommentsInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutCustomersInput_1.ReturnsCreateNestedManyWithoutCustomersInput)
], CustomersCreateWithoutCommentsInput.prototype, "returns", void 0);
CustomersCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateWithoutCommentsInput", {
        isAbstract: true
    })
], CustomersCreateWithoutCommentsInput);
exports.CustomersCreateWithoutCommentsInput = CustomersCreateWithoutCommentsInput;
