"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesUpdateInput_1 = require("../../../inputs/InvoicesUpdateInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let UpdateInvoicesArgs = class UpdateInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesUpdateInput_1.InvoicesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesUpdateInput_1.InvoicesUpdateInput)
], UpdateInvoicesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], UpdateInvoicesArgs.prototype, "where", void 0);
UpdateInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateInvoicesArgs);
exports.UpdateInvoicesArgs = UpdateInvoicesArgs;
