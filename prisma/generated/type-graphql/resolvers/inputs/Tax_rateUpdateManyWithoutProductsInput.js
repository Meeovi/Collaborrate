"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateManyProductsInputEnvelope_1 = require("../inputs/Tax_rateCreateManyProductsInputEnvelope");
const Tax_rateCreateOrConnectWithoutProductsInput_1 = require("../inputs/Tax_rateCreateOrConnectWithoutProductsInput");
const Tax_rateCreateWithoutProductsInput_1 = require("../inputs/Tax_rateCreateWithoutProductsInput");
const Tax_rateScalarWhereInput_1 = require("../inputs/Tax_rateScalarWhereInput");
const Tax_rateUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/Tax_rateUpdateManyWithWhereWithoutProductsInput");
const Tax_rateUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Tax_rateUpdateWithWhereUniqueWithoutProductsInput");
const Tax_rateUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Tax_rateUpsertWithWhereUniqueWithoutProductsInput");
const Tax_rateWhereUniqueInput_1 = require("../inputs/Tax_rateWhereUniqueInput");
let Tax_rateUpdateManyWithoutProductsInput = class Tax_rateUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateOrConnectWithoutProductsInput_1.Tax_rateCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateUpsertWithWhereUniqueWithoutProductsInput_1.Tax_rateUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateManyProductsInputEnvelope_1.Tax_rateCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateManyProductsInputEnvelope_1.Tax_rateCreateManyProductsInputEnvelope)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateUpdateWithWhereUniqueWithoutProductsInput_1.Tax_rateUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateUpdateManyWithWhereWithoutProductsInput_1.Tax_rateUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateScalarWhereInput_1.Tax_rateScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
Tax_rateUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateUpdateManyWithoutProductsInput);
exports.Tax_rateUpdateManyWithoutProductsInput = Tax_rateUpdateManyWithoutProductsInput;
