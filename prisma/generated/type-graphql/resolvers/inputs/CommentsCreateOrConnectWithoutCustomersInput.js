"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateWithoutCustomersInput_1 = require("../inputs/CommentsCreateWithoutCustomersInput");
const CommentsWhereUniqueInput_1 = require("../inputs/CommentsWhereUniqueInput");
let CommentsCreateOrConnectWithoutCustomersInput = class CommentsCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], CommentsCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput)
], CommentsCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
CommentsCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsCreateOrConnectWithoutCustomersInput);
exports.CommentsCreateOrConnectWithoutCustomersInput = CommentsCreateOrConnectWithoutCustomersInput;
