"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateWithoutProductsInput_1 = require("../inputs/Credit_memosCreateWithoutProductsInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosCreateOrConnectWithoutProductsInput = class Credit_memosCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput)
], Credit_memosCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
Credit_memosCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosCreateOrConnectWithoutProductsInput);
exports.Credit_memosCreateOrConnectWithoutProductsInput = Credit_memosCreateOrConnectWithoutProductsInput;
