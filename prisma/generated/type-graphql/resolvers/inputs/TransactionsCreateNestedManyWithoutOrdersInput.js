"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateNestedManyWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyOrdersInputEnvelope_1 = require("../inputs/TransactionsCreateManyOrdersInputEnvelope");
const TransactionsCreateOrConnectWithoutOrdersInput_1 = require("../inputs/TransactionsCreateOrConnectWithoutOrdersInput");
const TransactionsCreateWithoutOrdersInput_1 = require("../inputs/TransactionsCreateWithoutOrdersInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsCreateNestedManyWithoutOrdersInput = class TransactionsCreateNestedManyWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutOrdersInput_1.TransactionsCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateManyOrdersInputEnvelope_1.TransactionsCreateManyOrdersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateManyOrdersInputEnvelope_1.TransactionsCreateManyOrdersInputEnvelope)
], TransactionsCreateNestedManyWithoutOrdersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutOrdersInput.prototype, "connect", void 0);
TransactionsCreateNestedManyWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateNestedManyWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsCreateNestedManyWithoutOrdersInput);
exports.TransactionsCreateNestedManyWithoutOrdersInput = TransactionsCreateNestedManyWithoutOrdersInput;
