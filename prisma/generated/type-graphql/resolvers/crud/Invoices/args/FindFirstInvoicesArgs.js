"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesOrderByWithRelationInput_1 = require("../../../inputs/InvoicesOrderByWithRelationInput");
const InvoicesWhereInput_1 = require("../../../inputs/InvoicesWhereInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
const InvoicesScalarFieldEnum_1 = require("../../../../enums/InvoicesScalarFieldEnum");
let FindFirstInvoicesArgs = class FindFirstInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereInput_1.InvoicesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereInput_1.InvoicesWhereInput)
], FindFirstInvoicesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesOrderByWithRelationInput_1.InvoicesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInvoicesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], FindFirstInvoicesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInvoicesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstInvoicesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesScalarFieldEnum_1.InvoicesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstInvoicesArgs.prototype, "distinct", void 0);
FindFirstInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstInvoicesArgs);
exports.FindFirstInvoicesArgs = FindFirstInvoicesArgs;
