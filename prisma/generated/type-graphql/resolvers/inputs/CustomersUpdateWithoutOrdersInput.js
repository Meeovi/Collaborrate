"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateManyWithoutCustomersInput_1 = require("../inputs/CommentsUpdateManyWithoutCustomersInput");
const Credit_memosUpdateManyWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateManyWithoutCustomersInput");
const Customer_groupUpdateManyWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateManyWithoutCustomersInput");
const Customer_paymentUpdateOneWithoutCustomersInput_1 = require("../inputs/Customer_paymentUpdateOneWithoutCustomersInput");
const EmailsUpdateManyWithoutCustomersInput_1 = require("../inputs/EmailsUpdateManyWithoutCustomersInput");
const Newsletter_subscribersUpdateManyWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateManyWithoutCustomersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const QuotesUpdateManyWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesInput");
const ReturnsUpdateManyWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateManyWithoutCustomersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomersUpdateWithoutOrdersInput = class CustomersUpdateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "name_prefix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "middle_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "name_suffix", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "customer_since", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "confirmed_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "date_of_birth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "tax_vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "Address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "payment_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomersUpdateWithoutOrdersInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsUpdateManyWithoutCustomersInput_1.CommentsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyWithoutCustomersInput_1.Credit_memosUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateManyWithoutCustomersInput_1.Customer_groupUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "customer_group_customer_groupTocustomers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateOneWithoutCustomersInput_1.Customer_paymentUpdateOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateOneWithoutCustomersInput_1.Customer_paymentUpdateOneWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsUpdateManyWithoutCustomersInput_1.EmailsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsUpdateManyWithoutCustomersInput_1.EmailsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "emails", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersUpdateManyWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "newsletter_subscribers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithoutCustomers_customersToquotesInput)
], CustomersUpdateWithoutOrdersInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyWithoutCustomersInput_1.ReturnsUpdateManyWithoutCustomersInput)
], CustomersUpdateWithoutOrdersInput.prototype, "returns", void 0);
CustomersUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateWithoutOrdersInput", {
        isAbstract: true
    })
], CustomersUpdateWithoutOrdersInput);
exports.CustomersUpdateWithoutOrdersInput = CustomersUpdateWithoutOrdersInput;
