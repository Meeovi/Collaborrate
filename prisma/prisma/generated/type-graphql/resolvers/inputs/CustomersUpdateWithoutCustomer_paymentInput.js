"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateManyWithoutCustomersInput_1 = require("../inputs/CommentsUpdateManyWithoutCustomersInput");
const Credit_memosUpdateManyWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateManyWithoutCustomersInput");
const Customer_groupUpdateManyWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateManyWithoutCustomersInput");
const EmailsUpdateManyWithoutCustomersInput_1 = require("../inputs/EmailsUpdateManyWithoutCustomersInput");
const Newsletter_subscribersUpdateManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateManyWithoutCustomersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrdersUpdateManyWithoutCustomersInput_1 = require("../inputs/OrdersUpdateManyWithoutCustomersInput");
const QuotesUpdateManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesInput");
const ReturnsUpdateManyWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateManyWithoutCustomersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomersUpdateWithoutCustomer_paymentInput = class CustomersUpdateWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateManyWithoutCustomersInput_1.EmailsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsUpdateManyWithoutCustomersInput_1.EmailsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateManyWithoutCustomersInput_1.OrdersUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateManyWithoutCustomersInput_1.OrdersUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutCustomer_paymentInput.prototype, "returns", void 0);
CustomersUpdateWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], CustomersUpdateWithoutCustomer_paymentInput);
exports.CustomersUpdateWithoutCustomer_paymentInput = CustomersUpdateWithoutCustomer_paymentInput;
