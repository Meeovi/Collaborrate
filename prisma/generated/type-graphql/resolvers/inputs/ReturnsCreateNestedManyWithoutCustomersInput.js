"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyCustomersInputEnvelope_1 = require("../inputs/ReturnsCreateManyCustomersInputEnvelope");
const ReturnsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/ReturnsCreateOrConnectWithoutCustomersInput");
const ReturnsCreateWithoutCustomersInput_1 = require("../inputs/ReturnsCreateWithoutCustomersInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsCreateNestedManyWithoutCustomersInput = class ReturnsCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutCustomersInput_1.ReturnsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateManyCustomersInputEnvelope_1.ReturnsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateManyCustomersInputEnvelope_1.ReturnsCreateManyCustomersInputEnvelope)
], ReturnsCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
ReturnsCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsCreateNestedManyWithoutCustomersInput);
exports.ReturnsCreateNestedManyWithoutCustomersInput = ReturnsCreateNestedManyWithoutCustomersInput;
