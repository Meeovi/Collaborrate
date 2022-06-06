"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateManyCustomers_customersToquotesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateManyCustomers_customersToquotesInput");
let QuotesCreateManyCustomers_customersToquotesInputEnvelope = class QuotesCreateManyCustomers_customersToquotesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateManyCustomers_customersToquotesInput_1.QuotesCreateManyCustomers_customersToquotesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateManyCustomers_customersToquotesInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QuotesCreateManyCustomers_customersToquotesInputEnvelope.prototype, "skipDuplicates", void 0);
QuotesCreateManyCustomers_customersToquotesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateManyCustomers_customersToquotesInputEnvelope", {
        isAbstract: true
    })
], QuotesCreateManyCustomers_customersToquotesInputEnvelope);
exports.QuotesCreateManyCustomers_customersToquotesInputEnvelope = QuotesCreateManyCustomers_customersToquotesInputEnvelope;
