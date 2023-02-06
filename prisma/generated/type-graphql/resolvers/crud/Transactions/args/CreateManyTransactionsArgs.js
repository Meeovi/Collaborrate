"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyInput_1 = require("../../../inputs/TransactionsCreateManyInput");
let CreateManyTransactionsArgs = class CreateManyTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateManyInput_1.TransactionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTransactionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTransactionsArgs.prototype, "skipDuplicates", void 0);
CreateManyTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTransactionsArgs);
exports.CreateManyTransactionsArgs = CreateManyTransactionsArgs;
