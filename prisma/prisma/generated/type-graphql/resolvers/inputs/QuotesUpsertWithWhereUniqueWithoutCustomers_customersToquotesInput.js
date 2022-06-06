"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateWithoutCustomers_customersToquotesInput");
const QuotesUpdateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateWithoutCustomers_customersToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput = class QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutCustomers_customersToquotesInput_1.QuotesUpdateWithoutCustomers_customersToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutCustomers_customersToquotesInput_1.QuotesUpdateWithoutCustomers_customersToquotesInput)
], QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput)
], QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput.prototype, "create", void 0);
QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput);
exports.QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput = QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput;
