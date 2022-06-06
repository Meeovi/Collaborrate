"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateManyWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyCustomer_paymentInputEnvelope_1 = require("../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope");
const TransactionsCreateOrConnectWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput");
const TransactionsCreateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateWithoutCustomer_paymentInput");
const TransactionsScalarWhereInput_1 = require("../inputs/TransactionsScalarWhereInput");
const TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput");
const TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput");
const TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpdateManyWithoutCustomer_paymentInput = class TransactionsUpdateManyWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutCustomer_paymentInput_1.TransactionsCreateOrConnectWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput_1.TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateManyCustomer_paymentInputEnvelope_1.TransactionsCreateManyCustomer_paymentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateManyCustomer_paymentInputEnvelope_1.TransactionsCreateManyCustomer_paymentInputEnvelope)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput_1.TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput_1.TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsScalarWhereInput_1.TransactionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutCustomer_paymentInput.prototype, "deleteMany", void 0);
TransactionsUpdateManyWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateManyWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsUpdateManyWithoutCustomer_paymentInput);
exports.TransactionsUpdateManyWithoutCustomer_paymentInput = TransactionsUpdateManyWithoutCustomer_paymentInput;
