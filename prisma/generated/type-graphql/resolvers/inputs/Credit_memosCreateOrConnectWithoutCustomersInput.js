"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateWithoutCustomersInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosCreateOrConnectWithoutCustomersInput = class Credit_memosCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput)
], Credit_memosCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
Credit_memosCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosCreateOrConnectWithoutCustomersInput);
exports.Credit_memosCreateOrConnectWithoutCustomersInput = Credit_memosCreateOrConnectWithoutCustomersInput;
