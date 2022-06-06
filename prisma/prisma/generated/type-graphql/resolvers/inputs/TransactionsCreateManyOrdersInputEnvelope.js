"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateManyOrdersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyOrdersInput_1 = require("../inputs/TransactionsCreateManyOrdersInput");
let TransactionsCreateManyOrdersInputEnvelope = class TransactionsCreateManyOrdersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateManyOrdersInput_1.TransactionsCreateManyOrdersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateManyOrdersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TransactionsCreateManyOrdersInputEnvelope.prototype, "skipDuplicates", void 0);
TransactionsCreateManyOrdersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateManyOrdersInputEnvelope", {
        isAbstract: true
    })
], TransactionsCreateManyOrdersInputEnvelope);
exports.TransactionsCreateManyOrdersInputEnvelope = TransactionsCreateManyOrdersInputEnvelope;
