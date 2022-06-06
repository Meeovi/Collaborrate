"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let DeleteInvoicesArgs = class DeleteInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], DeleteInvoicesArgs.prototype, "where", void 0);
DeleteInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteInvoicesArgs);
exports.DeleteInvoicesArgs = DeleteInvoicesArgs;
