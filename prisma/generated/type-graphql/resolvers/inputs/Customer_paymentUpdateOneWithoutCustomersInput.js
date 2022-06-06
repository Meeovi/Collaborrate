"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpdateOneWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateOrConnectWithoutCustomersInput");
const Customer_paymentCreateWithoutCustomersInput_1 = require("../inputs/Customer_paymentCreateWithoutCustomersInput");
const Customer_paymentUpdateWithoutCustomersInput_1 = require("../inputs/Customer_paymentUpdateWithoutCustomersInput");
const Customer_paymentUpsertWithoutCustomersInput_1 = require("../inputs/Customer_paymentUpsertWithoutCustomersInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentUpdateOneWithoutCustomersInput = class Customer_paymentUpdateOneWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutCustomersInput_1.Customer_paymentCreateWithoutCustomersInput)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutCustomersInput_1.Customer_paymentCreateOrConnectWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateOrConnectWithoutCustomersInput_1.Customer_paymentCreateOrConnectWithoutCustomersInput)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpsertWithoutCustomersInput_1.Customer_paymentUpsertWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpsertWithoutCustomersInput_1.Customer_paymentUpsertWithoutCustomersInput)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutCustomersInput_1.Customer_paymentUpdateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateWithoutCustomersInput_1.Customer_paymentUpdateWithoutCustomersInput)
], Customer_paymentUpdateOneWithoutCustomersInput.prototype, "update", void 0);
Customer_paymentUpdateOneWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpdateOneWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_paymentUpdateOneWithoutCustomersInput);
exports.Customer_paymentUpdateOneWithoutCustomersInput = Customer_paymentUpdateOneWithoutCustomersInput;
