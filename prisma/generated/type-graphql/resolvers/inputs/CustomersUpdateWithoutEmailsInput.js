"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateWithoutEmailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateManyWithoutCustomersInput_1 = require("../inputs/CommentsUpdateManyWithoutCustomersInput");
const Credit_memosUpdateManyWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateManyWithoutCustomersInput");
const Customer_groupUpdateManyWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateManyWithoutCustomersInput");
const Customer_paymentUpdateOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentUpdateOneWithoutCustomersInput");
const Newsletter_subscribersUpdateManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateManyWithoutCustomersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrdersUpdateManyWithoutCustomersInput_1 = require("../inputs/OrdersUpdateManyWithoutCustomersInput");
const QuotesUpdateManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesInput");
const ReturnsUpdateManyWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateManyWithoutCustomersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomersUpdateWithoutEmailsInput = class CustomersUpdateWithoutEmailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutEmailsInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateOneWithoutCustomersInput_1.Customer_paymentUpdateOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateOneWithoutCustomersInput_1.Customer_paymentUpdateOneWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersUpdateManyWithoutCustomersInput_1.OrdersUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersUpdateManyWithoutCustomersInput_1.OrdersUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput)
], CustomersUpdateWithoutEmailsInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutEmailsInput.prototype, "returns", void 0);
CustomersUpdateWithoutEmailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateWithoutEmailsInput", {
        isAbstract: true
    })
], CustomersUpdateWithoutEmailsInput);
exports.CustomersUpdateWithoutEmailsInput = CustomersUpdateWithoutEmailsInput;
