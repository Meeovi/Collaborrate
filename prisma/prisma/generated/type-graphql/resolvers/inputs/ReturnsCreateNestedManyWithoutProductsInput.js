"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyProductsInputEnvelope_1 = require("../inputs/ReturnsCreateManyProductsInputEnvelope");
const ReturnsCreateOrConnectWithoutProductsInput_1 = require("../inputs/ReturnsCreateOrConnectWithoutProductsInput");
const ReturnsCreateWithoutProductsInput_1 = require("../inputs/ReturnsCreateWithoutProductsInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsCreateNestedManyWithoutProductsInput = class ReturnsCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutProductsInput_1.ReturnsCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateManyProductsInputEnvelope_1.ReturnsCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateManyProductsInputEnvelope_1.ReturnsCreateManyProductsInputEnvelope)
], ReturnsCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
ReturnsCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsCreateNestedManyWithoutProductsInput);
exports.ReturnsCreateNestedManyWithoutProductsInput = ReturnsCreateNestedManyWithoutProductsInput;
