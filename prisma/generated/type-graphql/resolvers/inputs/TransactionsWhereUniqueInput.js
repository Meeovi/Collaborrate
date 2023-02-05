"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionsWhereUniqueInput = class TransactionsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsWhereUniqueInput.prototype, "id", void 0);
TransactionsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsWhereUniqueInput", {
        isAbstract: true
    })
], TransactionsWhereUniqueInput);
exports.TransactionsWhereUniqueInput = TransactionsWhereUniqueInput;
