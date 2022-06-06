"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutEmailsInput_1 = require("../inputs/CustomersCreateNestedOneWithoutEmailsInput");
let EmailsCreateInput = class EmailsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutEmailsInput_1.CustomersCreateNestedOneWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutEmailsInput_1.CustomersCreateNestedOneWithoutEmailsInput)
], EmailsCreateInput.prototype, "customers", void 0);
EmailsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateInput", {
        isAbstract: true
    })
], EmailsCreateInput);
exports.EmailsCreateInput = EmailsCreateInput;
