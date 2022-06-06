"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyOrdersInputEnvelope_1 = require("../inputs/QuotesCreateManyOrdersInputEnvelope");
const QuotesCreateOrConnectWithoutOrdersInput_1 = require("../inputs/QuotesCreateOrConnectWithoutOrdersInput");
const QuotesCreateWithoutOrdersInput_1 = require("../inputs/QuotesCreateWithoutOrdersInput");
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyWithWhereWithoutOrdersInput_1 = require("../inputs/QuotesUpdateManyWithWhereWithoutOrdersInput");
const QuotesUpdateWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/QuotesUpdateWithWhereUniqueWithoutOrdersInput");
const QuotesUpsertWithWhereUniqueWithoutOrdersInput_1 = require("../inputs/QuotesUpsertWithWhereUniqueWithoutOrdersInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateManyWithoutOrdersInput = class QuotesUpdateManyWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutOrdersInput_1.QuotesCreateWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutOrdersInput_1.QuotesCreateOrConnectWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutOrdersInput_1.QuotesUpsertWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyOrdersInputEnvelope_1.QuotesCreateManyOrdersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyOrdersInputEnvelope_1.QuotesCreateManyOrdersInputEnvelope)
], QuotesUpdateManyWithoutOrdersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutOrdersInput_1.QuotesUpdateWithWhereUniqueWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutOrdersInput_1.QuotesUpdateManyWithWhereWithoutOrdersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarWhereInput_1.QuotesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutOrdersInput.prototype, "deleteMany", void 0);
QuotesUpdateManyWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithoutOrdersInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithoutOrdersInput);
exports.QuotesUpdateManyWithoutOrdersInput = QuotesUpdateManyWithoutOrdersInput;
