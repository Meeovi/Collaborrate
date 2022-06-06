"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateWithoutCustomers_customersToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput = class QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutCustomers_customersToquotesInput_1.QuotesUpdateWithoutCustomers_customersToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutCustomers_customersToquotesInput_1.QuotesUpdateWithoutCustomers_customersToquotesInput)
], QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput.prototype, "data", void 0);
QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput);
exports.QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput = QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput;
