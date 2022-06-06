"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateWithoutCustomersInput_1 = require("../inputs/ReturnsCreateWithoutCustomersInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsCreateOrConnectWithoutCustomersInput = class ReturnsCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput)
], ReturnsCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
ReturnsCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsCreateOrConnectWithoutCustomersInput);
exports.ReturnsCreateOrConnectWithoutCustomersInput = ReturnsCreateOrConnectWithoutCustomersInput;
