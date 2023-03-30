"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateInput_1 = require("../../../inputs/TransactionsCreateInput");
let CreateOneTransactionsArgs = class CreateOneTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateInput_1.TransactionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateInput_1.TransactionsCreateInput)
], CreateOneTransactionsArgs.prototype, "data", void 0);
CreateOneTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTransactionsArgs);
exports.CreateOneTransactionsArgs = CreateOneTransactionsArgs;
