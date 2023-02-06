"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesCreateInput_1 = require("../../../inputs/InvoicesCreateInput");
let CreateOneInvoicesArgs = class CreateOneInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCreateInput_1.InvoicesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InvoicesCreateInput_1.InvoicesCreateInput)
], CreateOneInvoicesArgs.prototype, "data", void 0);
CreateOneInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInvoicesArgs);
exports.CreateOneInvoicesArgs = CreateOneInvoicesArgs;
