"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesCreateInput_1 = require("../../../inputs/InvoicesCreateInput");
const InvoicesUpdateInput_1 = require("../../../inputs/InvoicesUpdateInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let UpsertOneInvoicesArgs = class UpsertOneInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], UpsertOneInvoicesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCreateInput_1.InvoicesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesCreateInput_1.InvoicesCreateInput)
], UpsertOneInvoicesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesUpdateInput_1.InvoicesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesUpdateInput_1.InvoicesUpdateInput)
], UpsertOneInvoicesArgs.prototype, "update", void 0);
UpsertOneInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInvoicesArgs);
exports.UpsertOneInvoicesArgs = UpsertOneInvoicesArgs;
