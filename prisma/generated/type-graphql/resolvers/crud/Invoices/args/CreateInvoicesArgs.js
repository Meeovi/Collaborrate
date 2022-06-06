"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesCreateInput_1 = require("../../../inputs/InvoicesCreateInput");
let CreateInvoicesArgs = class CreateInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCreateInput_1.InvoicesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesCreateInput_1.InvoicesCreateInput)
], CreateInvoicesArgs.prototype, "data", void 0);
CreateInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateInvoicesArgs);
exports.CreateInvoicesArgs = CreateInvoicesArgs;
