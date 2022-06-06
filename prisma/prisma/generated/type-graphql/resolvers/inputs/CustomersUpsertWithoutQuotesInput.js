"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutQuotesInput_1 = require("../inputs/CustomersCreateWithoutQuotesInput");
const CustomersUpdateWithoutQuotesInput_1 = require("../inputs/CustomersUpdateWithoutQuotesInput");
let CustomersUpsertWithoutQuotesInput = class CustomersUpsertWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutQuotesInput_1.CustomersUpdateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutQuotesInput_1.CustomersUpdateWithoutQuotesInput)
], CustomersUpsertWithoutQuotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput)
], CustomersUpsertWithoutQuotesInput.prototype, "create", void 0);
CustomersUpsertWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutQuotesInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutQuotesInput);
exports.CustomersUpsertWithoutQuotesInput = CustomersUpsertWithoutQuotesInput;
