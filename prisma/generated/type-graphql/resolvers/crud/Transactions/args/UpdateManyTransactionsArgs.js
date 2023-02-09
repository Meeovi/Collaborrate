"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsUpdateManyMutationInput_1 = require("../../../inputs/TransactionsUpdateManyMutationInput");
const TransactionsWhereInput_1 = require("../../../inputs/TransactionsWhereInput");
let UpdateManyTransactionsArgs = class UpdateManyTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput)
], UpdateManyTransactionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], UpdateManyTransactionsArgs.prototype, "where", void 0);
UpdateManyTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTransactionsArgs);
exports.UpdateManyTransactionsArgs = UpdateManyTransactionsArgs;
