"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateManyProductsInputEnvelope_1 = require("../inputs/RatingCreateManyProductsInputEnvelope");
const RatingCreateOrConnectWithoutProductsInput_1 = require("../inputs/RatingCreateOrConnectWithoutProductsInput");
const RatingCreateWithoutProductsInput_1 = require("../inputs/RatingCreateWithoutProductsInput");
const RatingScalarWhereInput_1 = require("../inputs/RatingScalarWhereInput");
const RatingUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/RatingUpdateManyWithWhereWithoutProductsInput");
const RatingUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/RatingUpdateWithWhereUniqueWithoutProductsInput");
const RatingUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/RatingUpsertWithWhereUniqueWithoutProductsInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingUpdateManyWithoutProductsInput = class RatingUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingCreateWithoutProductsInput_1.RatingCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutProductsInput_1.RatingCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingUpsertWithWhereUniqueWithoutProductsInput_1.RatingUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateManyProductsInputEnvelope_1.RatingCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateManyProductsInputEnvelope_1.RatingCreateManyProductsInputEnvelope)
], RatingUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereUniqueInput_1.RatingWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereUniqueInput_1.RatingWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereUniqueInput_1.RatingWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereUniqueInput_1.RatingWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingUpdateWithWhereUniqueWithoutProductsInput_1.RatingUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingUpdateManyWithWhereWithoutProductsInput_1.RatingUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarWhereInput_1.RatingScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
RatingUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], RatingUpdateManyWithoutProductsInput);
exports.RatingUpdateManyWithoutProductsInput = RatingUpdateManyWithoutProductsInput;
