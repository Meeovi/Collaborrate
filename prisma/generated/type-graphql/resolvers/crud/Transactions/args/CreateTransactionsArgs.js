"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateInput_1 = require("../../../inputs/TransactionsCreateInput");
let CreateTransactionsArgs = class CreateTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateInput_1.TransactionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateInput_1.TransactionsCreateInput)
], CreateTransactionsArgs.prototype, "data", void 0);
CreateTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTransactionsArgs);
exports.CreateTransactionsArgs = CreateTransactionsArgs;
