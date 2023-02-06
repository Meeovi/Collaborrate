"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInvoicesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesCreateManyInput_1 = require("../../../inputs/InvoicesCreateManyInput");
let CreateManyInvoicesArgs = class CreateManyInvoicesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesCreateManyInput_1.InvoicesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInvoicesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInvoicesArgs.prototype, "skipDuplicates", void 0);
CreateManyInvoicesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInvoicesArgs);
exports.CreateManyInvoicesArgs = CreateManyInvoicesArgs;
