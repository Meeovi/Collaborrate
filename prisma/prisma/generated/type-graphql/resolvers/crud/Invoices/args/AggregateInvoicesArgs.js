"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesOrderByWithRelationInput_1 = require("../../../inputs/InvoicesOrderByWithRelationInput");
const InvoicesWhereInput_1 = require("../../../inputs/InvoicesWhereInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let AggregateInvoicesArgs = class AggregateInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereInput_1.InvoicesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereInput_1.InvoicesWhereInput)
], AggregateInvoicesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesOrderByWithRelationInput_1.InvoicesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateInvoicesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], AggregateInvoicesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInvoicesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInvoicesArgs.prototype, "skip", void 0);
AggregateInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateInvoicesArgs);
exports.AggregateInvoicesArgs = AggregateInvoicesArgs;
