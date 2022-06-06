"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateManyProducts_productsToquotesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateManyProducts_productsToquotesInput");
let QuotesCreateManyProducts_productsToquotesInputEnvelope = class QuotesCreateManyProducts_productsToquotesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateManyProducts_productsToquotesInput_1.QuotesCreateManyProducts_productsToquotesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateManyProducts_productsToquotesInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QuotesCreateManyProducts_productsToquotesInputEnvelope.prototype, "skipDuplicates", void 0);
QuotesCreateManyProducts_productsToquotesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateManyProducts_productsToquotesInputEnvelope", {
        isAbstract: true
    })
], QuotesCreateManyProducts_productsToquotesInputEnvelope);
exports.QuotesCreateManyProducts_productsToquotesInputEnvelope = QuotesCreateManyProducts_productsToquotesInputEnvelope;
