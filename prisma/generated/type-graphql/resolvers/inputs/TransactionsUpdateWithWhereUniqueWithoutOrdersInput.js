"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsUpdateWithoutOrdersInput_1 = require("../inputs/TransactionsUpdateWithoutOrdersInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpdateWithWhereUniqueWithoutOrdersInput = class TransactionsUpdateWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsUpdateWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateWithoutOrdersInput_1.TransactionsUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateWithoutOrdersInput_1.TransactionsUpdateWithoutOrdersInput)
], TransactionsUpdateWithWhereUniqueWithoutOrdersInput.prototype, "data", void 0);
TransactionsUpdateWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsUpdateWithWhereUniqueWithoutOrdersInput);
exports.TransactionsUpdateWithWhereUniqueWithoutOrdersInput = TransactionsUpdateWithWhereUniqueWithoutOrdersInput;
