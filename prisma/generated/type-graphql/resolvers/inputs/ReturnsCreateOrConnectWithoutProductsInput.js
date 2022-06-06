"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateWithoutProductsInput_1 = require("../inputs/ReturnsCreateWithoutProductsInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsCreateOrConnectWithoutProductsInput = class ReturnsCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput)
], ReturnsCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
ReturnsCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsCreateOrConnectWithoutProductsInput);
exports.ReturnsCreateOrConnectWithoutProductsInput = ReturnsCreateOrConnectWithoutProductsInput;
