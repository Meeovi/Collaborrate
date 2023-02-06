"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let FindUniqueInvoicesArgs = class FindUniqueInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], FindUniqueInvoicesArgs.prototype, "where", void 0);
FindUniqueInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueInvoicesArgs);
exports.FindUniqueInvoicesArgs = FindUniqueInvoicesArgs;
