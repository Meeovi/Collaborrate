"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpsertWithWhereUniqueWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateWithoutOrdersInput_1 = require("../inputs/TransactionsCreateWithoutOrdersInput");
const TransactionsUpdateWithoutOrdersInput_1 = require("../inputs/TransactionsUpdateWithoutOrdersInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpsertWithWhereUniqueWithoutOrdersInput = class TransactionsUpsertWithWhereUniqueWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsUpsertWithWhereUniqueWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateWithoutOrdersInput_1.TransactionsUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateWithoutOrdersInput_1.TransactionsUpdateWithoutOrdersInput)
], TransactionsUpsertWithWhereUniqueWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput)
], TransactionsUpsertWithWhereUniqueWithoutOrdersInput.prototype, "create", void 0);
TransactionsUpsertWithWhereUniqueWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpsertWithWhereUniqueWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsUpsertWithWhereUniqueWithoutOrdersInput);
exports.TransactionsUpsertWithWhereUniqueWithoutOrdersInput = TransactionsUpsertWithWhereUniqueWithoutOrdersInput;
