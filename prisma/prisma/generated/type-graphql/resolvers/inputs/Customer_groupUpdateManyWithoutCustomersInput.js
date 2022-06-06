"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateManyCustomersInputEnvelope_1 = require("../inputs/Customer_groupCreateManyCustomersInputEnvelope");
const Customer_groupCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateOrConnectWithoutCustomersInput");
const Customer_groupCreateWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateWithoutCustomersInput");
const Customer_groupScalarWhereInput_1 = require("../inputs/Customer_groupScalarWhereInput");
const Customer_groupUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateManyWithWhereWithoutCustomersInput");
const Customer_groupUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateWithWhereUniqueWithoutCustomersInput");
const Customer_groupUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Customer_groupUpsertWithWhereUniqueWithoutCustomersInput");
const Customer_groupWhereUniqueInput_1 = require("../inputs/Customer_groupWhereUniqueInput");
let Customer_groupUpdateManyWithoutCustomersInput = class Customer_groupUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateOrConnectWithoutCustomersInput_1.Customer_groupCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupUpsertWithWhereUniqueWithoutCustomersInput_1.Customer_groupUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateManyCustomersInputEnvelope_1.Customer_groupCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateManyCustomersInputEnvelope_1.Customer_groupCreateManyCustomersInputEnvelope)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupUpdateWithWhereUniqueWithoutCustomersInput_1.Customer_groupUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupUpdateManyWithWhereWithoutCustomersInput_1.Customer_groupUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupScalarWhereInput_1.Customer_groupScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
Customer_groupUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupUpdateManyWithoutCustomersInput);
exports.Customer_groupUpdateManyWithoutCustomersInput = Customer_groupUpdateManyWithoutCustomersInput;
