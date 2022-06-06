"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesCreateInput_1 = require("../../../inputs/InvoicesCreateInput");
const InvoicesUpdateInput_1 = require("../../../inputs/InvoicesUpdateInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let UpsertInvoicesArgs = class UpsertInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], UpsertInvoicesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCreateInput_1.InvoicesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesCreateInput_1.InvoicesCreateInput)
], UpsertInvoicesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesUpdateInput_1.InvoicesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesUpdateInput_1.InvoicesUpdateInput)
], UpsertInvoicesArgs.prototype, "update", void 0);
UpsertInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertInvoicesArgs);
exports.UpsertInvoicesArgs = UpsertInvoicesArgs;
