"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutEmailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutEmailsInput_1 = require("../inputs/CustomersCreateWithoutEmailsInput");
const CustomersUpdateWithoutEmailsInput_1 = require("../inputs/CustomersUpdateWithoutEmailsInput");
let CustomersUpsertWithoutEmailsInput = class CustomersUpsertWithoutEmailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutEmailsInput_1.CustomersUpdateWithoutEmailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutEmailsInput_1.CustomersUpdateWithoutEmailsInput)
], CustomersUpsertWithoutEmailsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput)
], CustomersUpsertWithoutEmailsInput.prototype, "create", void 0);
CustomersUpsertWithoutEmailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutEmailsInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutEmailsInput);
exports.CustomersUpsertWithoutEmailsInput = CustomersUpsertWithoutEmailsInput;
