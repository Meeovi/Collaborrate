"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateOrConnectWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateWithoutCustomers_customersToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateOrConnectWithoutCustomers_customersToquotesInput = class QuotesCreateOrConnectWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesCreateOrConnectWithoutCustomers_customersToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput)
], QuotesCreateOrConnectWithoutCustomers_customersToquotesInput.prototype, "create", void 0);
QuotesCreateOrConnectWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateOrConnectWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesCreateOrConnectWithoutCustomers_customersToquotesInput);
exports.QuotesCreateOrConnectWithoutCustomers_customersToquotesInput = QuotesCreateOrConnectWithoutCustomers_customersToquotesInput;
