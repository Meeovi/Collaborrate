"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateManyWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyOrdersInputEnvelope_1 = require("../inputs/TransactionsCreateManyOrdersInputEnvelope");
const TransactionsCreateOrConnectWithoutOrdersInput_1 = require("../inputs/TransactionsCreateOrConnectWithoutOrdersInput");
const TransactionsCreateWithoutOrdersInput_1 = require("../inputs/TransactionsCreateWithoutOrdersInput");
const TransactionsScalarWhereInput_1 = require("../inputs/TransactionsScalarWhereInput");
const TransactionsUpdateManyWithWhereWithoutOrdersInput_1 = require("../inputs/TransactionsUpdateManyWithWhereWithoutOrdersInput");
const TransactionsUpdateWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/TransactionsUpdateWithWhereUniqueWithoutOrdersInput");
const TransactionsUpsertWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/TransactionsUpsertWithWhereUniqueWithoutOrdersInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpdateManyWithoutOrdersInput = class TransactionsUpdateManyWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateWithoutOrdersInput_1.TransactionsCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutOrdersInput_1.TransactionsCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpsertWithWhereUniqueWithoutOrdersInput_1.TransactionsUpsertWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateManyOrdersInputEnvelope_1.TransactionsCreateManyOrdersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateManyOrdersInputEnvelope_1.TransactionsCreateManyOrdersInputEnvelope)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpdateWithWhereUniqueWithoutOrdersInput_1.TransactionsUpdateWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsUpdateManyWithWhereWithoutOrdersInput_1.TransactionsUpdateManyWithWhereWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsScalarWhereInput_1.TransactionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsUpdateManyWithoutOrdersInput.prototype, "deleteMany", void 0);
TransactionsUpdateManyWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateManyWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsUpdateManyWithoutOrdersInput);
exports.TransactionsUpdateManyWithoutOrdersInput = TransactionsUpdateManyWithoutOrdersInput;
