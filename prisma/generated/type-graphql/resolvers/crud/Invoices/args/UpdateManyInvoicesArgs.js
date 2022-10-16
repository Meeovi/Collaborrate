"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesUpdateManyMutationInput_1 = require("../../../inputs/InvoicesUpdateManyMutationInput");
const InvoicesWhereInput_1 = require("../../../inputs/InvoicesWhereInput");
let UpdateManyInvoicesArgs = class UpdateManyInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesUpdateManyMutationInput_1.InvoicesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesUpdateManyMutationInput_1.InvoicesUpdateManyMutationInput)
], UpdateManyInvoicesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereInput_1.InvoicesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesWhereInput_1.InvoicesWhereInput)
], UpdateManyInvoicesArgs.prototype, "where", void 0);
UpdateManyInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInvoicesArgs);
exports.UpdateManyInvoicesArgs = UpdateManyInvoicesArgs;
