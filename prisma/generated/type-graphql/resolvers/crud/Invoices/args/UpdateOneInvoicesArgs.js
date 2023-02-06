"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesUpdateInput_1 = require("../../../inputs/InvoicesUpdateInput");
const InvoicesWhereUniqueInput_1 = require("../../../inputs/InvoicesWhereUniqueInput");
let UpdateOneInvoicesArgs = class UpdateOneInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesUpdateInput_1.InvoicesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesUpdateInput_1.InvoicesUpdateInput)
], UpdateOneInvoicesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesWhereUniqueInput_1.InvoicesWhereUniqueInput)
], UpdateOneInvoicesArgs.prototype, "where", void 0);
UpdateOneInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInvoicesArgs);
exports.UpdateOneInvoicesArgs = UpdateOneInvoicesArgs;
