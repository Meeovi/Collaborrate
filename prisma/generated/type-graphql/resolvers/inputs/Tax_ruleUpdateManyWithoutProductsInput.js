"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateManyProductsInputEnvelope_1 = require("../inputs/Tax_ruleCreateManyProductsInputEnvelope");
const Tax_ruleCreateOrConnectWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateOrConnectWithoutProductsInput");
const Tax_ruleCreateWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateWithoutProductsInput");
const Tax_ruleScalarWhereInput_1 = require("../inputs/Tax_ruleScalarWhereInput");
const Tax_ruleUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/Tax_ruleUpdateManyWithWhereWithoutProductsInput");
const Tax_ruleUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Tax_ruleUpdateWithWhereUniqueWithoutProductsInput");
const Tax_ruleUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Tax_ruleUpsertWithWhereUniqueWithoutProductsInput");
const Tax_ruleWhereUniqueInput_1 = require("../inputs/Tax_ruleWhereUniqueInput");
let Tax_ruleUpdateManyWithoutProductsInput = class Tax_ruleUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateOrConnectWithoutProductsInput_1.Tax_ruleCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleUpsertWithWhereUniqueWithoutProductsInput_1.Tax_ruleUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateManyProductsInputEnvelope_1.Tax_ruleCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateManyProductsInputEnvelope_1.Tax_ruleCreateManyProductsInputEnvelope)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleUpdateWithWhereUniqueWithoutProductsInput_1.Tax_ruleUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleUpdateManyWithWhereWithoutProductsInput_1.Tax_ruleUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput_1.Tax_ruleScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
Tax_ruleUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleUpdateManyWithoutProductsInput);
exports.Tax_ruleUpdateManyWithoutProductsInput = Tax_ruleUpdateManyWithoutProductsInput;
