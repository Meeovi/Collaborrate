"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateManyCustomersInputEnvelope_1 = require("../inputs/CommentsCreateManyCustomersInputEnvelope");
const CommentsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/CommentsCreateOrConnectWithoutCustomersInput");
const CommentsCreateWithoutCustomersInput_1 = require("../inputs/CommentsCreateWithoutCustomersInput");
const CommentsScalarWhereInput_1 = require("../inputs/CommentsScalarWhereInput");
const CommentsUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/CommentsUpdateManyWithWhereWithoutCustomersInput");
const CommentsUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/CommentsUpdateWithWhereUniqueWithoutCustomersInput");
const CommentsUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/CommentsUpsertWithWhereUniqueWithoutCustomersInput");
const CommentsWhereUniqueInput_1 = require("../inputs/CommentsWhereUniqueInput");
let CommentsUpdateManyWithoutCustomersInput = class CommentsUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutCustomersInput_1.CommentsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutCustomersInput_1.CommentsUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateManyCustomersInputEnvelope_1.CommentsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCreateManyCustomersInputEnvelope_1.CommentsCreateManyCustomersInputEnvelope)
], CommentsUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereUniqueInput_1.CommentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereUniqueInput_1.CommentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereUniqueInput_1.CommentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereUniqueInput_1.CommentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutCustomersInput_1.CommentsUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutCustomersInput_1.CommentsUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsScalarWhereInput_1.CommentsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
CommentsUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsUpdateManyWithoutCustomersInput);
exports.CommentsUpdateManyWithoutCustomersInput = CommentsUpdateManyWithoutCustomersInput;
