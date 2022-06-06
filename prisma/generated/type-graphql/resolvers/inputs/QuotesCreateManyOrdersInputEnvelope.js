"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateManyOrdersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyOrdersInput_1 = require("../inputs/QuotesCreateManyOrdersInput");
let QuotesCreateManyOrdersInputEnvelope = class QuotesCreateManyOrdersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateManyOrdersInput_1.QuotesCreateManyOrdersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateManyOrdersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], QuotesCreateManyOrdersInputEnvelope.prototype, "skipDuplicates", void 0);
QuotesCreateManyOrdersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateManyOrdersInputEnvelope", {
        isAbstract: true
    })
], QuotesCreateManyOrdersInputEnvelope);
exports.QuotesCreateManyOrdersInputEnvelope = QuotesCreateManyOrdersInputEnvelope;
