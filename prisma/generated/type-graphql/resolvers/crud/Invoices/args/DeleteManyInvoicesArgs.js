"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesWhereInput_1 = require("../../../inputs/InvoicesWhereInput");
let DeleteManyInvoicesArgs = class DeleteManyInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereInput_1.InvoicesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereInput_1.InvoicesWhereInput)
], DeleteManyInvoicesArgs.prototype, "where", void 0);
DeleteManyInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInvoicesArgs);
exports.DeleteManyInvoicesArgs = DeleteManyInvoicesArgs;
