"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateWithoutCredit_memosInput");
const CustomersUpdateWithoutCredit_memosInput_1 = require("../inputs/CustomersUpdateWithoutCredit_memosInput");
let CustomersUpsertWithoutCredit_memosInput = class CustomersUpsertWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCredit_memosInput_1.CustomersUpdateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCredit_memosInput_1.CustomersUpdateWithoutCredit_memosInput)
], CustomersUpsertWithoutCredit_memosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput)
], CustomersUpsertWithoutCredit_memosInput.prototype, "create", void 0);
CustomersUpsertWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutCredit_memosInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutCredit_memosInput);
exports.CustomersUpsertWithoutCredit_memosInput = CustomersUpsertWithoutCredit_memosInput;
