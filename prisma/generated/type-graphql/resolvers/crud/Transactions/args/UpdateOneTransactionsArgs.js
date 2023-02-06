"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsUpdateInput_1 = require("../../../inputs/TransactionsUpdateInput");
const TransactionsWhereUniqueInput_1 = require("../../../inputs/TransactionsWhereUniqueInput");
let UpdateOneTransactionsArgs = class UpdateOneTransactionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateInput_1.TransactionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateInput_1.TransactionsUpdateInput)
], UpdateOneTransactionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], UpdateOneTransactionsArgs.prototype, "where", void 0);
UpdateOneTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTransactionsArgs);
exports.UpdateOneTransactionsArgs = UpdateOneTransactionsArgs;
