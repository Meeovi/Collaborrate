"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateManyWithWhereWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsScalarWhereInput_1 = require("../inputs/TransactionsScalarWhereInput");
const TransactionsUpdateManyMutationInput_1 = require("../inputs/TransactionsUpdateManyMutationInput");
let TransactionsUpdateManyWithWhereWithoutOrdersInput = class TransactionsUpdateManyWithWhereWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsScalarWhereInput_1.TransactionsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsScalarWhereInput_1.TransactionsScalarWhereInput)
], TransactionsUpdateManyWithWhereWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput)
], TransactionsUpdateManyWithWhereWithoutOrdersInput.prototype, "data", void 0);
TransactionsUpdateManyWithWhereWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateManyWithWhereWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsUpdateManyWithWhereWithoutOrdersInput);
exports.TransactionsUpdateManyWithWhereWithoutOrdersInput = TransactionsUpdateManyWithWhereWithoutOrdersInput;
