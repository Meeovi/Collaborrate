"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateWithoutOrdersInput_1 = require("../inputs/TransactionsCreateWithoutOrdersInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsCreateOrConnectWithoutOrdersInput = class TransactionsCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput)
], TransactionsCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
TransactionsCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsCreateOrConnectWithoutOrdersInput);
exports.TransactionsCreateOrConnectWithoutOrdersInput = TransactionsCreateOrConnectWithoutOrdersInput;
