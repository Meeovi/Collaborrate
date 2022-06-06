"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFieldUpdateOperationsInput_1 = require("../inputs/BigIntFieldUpdateOperationsInput");
const CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let Customer_groupUpdateInput = class Customer_groupUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFieldUpdateOperationsInput_1.BigIntFieldUpdateOperationsInput)
], Customer_groupUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], Customer_groupUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_groupUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Customer_groupUpdateInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput)
], Customer_groupUpdateInput.prototype, "customers", void 0);
Customer_groupUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupUpdateInput", {
        isAbstract: true
    })
], Customer_groupUpdateInput);
exports.Customer_groupUpdateInput = Customer_groupUpdateInput;
