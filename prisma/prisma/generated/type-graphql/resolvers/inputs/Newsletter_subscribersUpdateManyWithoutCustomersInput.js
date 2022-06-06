"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateManyCustomersInputEnvelope_1 = require("../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope");
const Newsletter_subscribersCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput");
const Newsletter_subscribersCreateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateWithoutCustomersInput");
const Newsletter_subscribersScalarWhereInput_1 = require("../inputs/Newsletter_subscribersScalarWhereInput");
const Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput");
const Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput");
const Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../inputs/Newsletter_subscribersWhereUniqueInput");
let Newsletter_subscribersUpdateManyWithoutCustomersInput = class Newsletter_subscribersUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersCreateOrConnectWithoutCustomersInput_1.Newsletter_subscribersCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput_1.Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateManyCustomersInputEnvelope_1.Newsletter_subscribersCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateManyCustomersInputEnvelope_1.Newsletter_subscribersCreateManyCustomersInputEnvelope)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput_1.Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput_1.Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarWhereInput_1.Newsletter_subscribersScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
Newsletter_subscribersUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersUpdateManyWithoutCustomersInput);
exports.Newsletter_subscribersUpdateManyWithoutCustomersInput = Newsletter_subscribersUpdateManyWithoutCustomersInput;
