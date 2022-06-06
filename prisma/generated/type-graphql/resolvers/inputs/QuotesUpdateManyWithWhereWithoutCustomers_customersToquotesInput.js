"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyMutationInput_1 = require("../inputs/QuotesUpdateManyMutationInput");
let QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput = class QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesScalarWhereInput_1.QuotesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesScalarWhereInput_1.QuotesScalarWhereInput)
], QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateManyMutationInput_1.QuotesUpdateManyMutationInput)
], QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput.prototype, "data", void 0);
QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput);
exports.QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput = QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput;
