"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyCustomersInputEnvelope_1 = require("../inputs/Credit_memosCreateManyCustomersInputEnvelope");
const Credit_memosCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateOrConnectWithoutCustomersInput");
const Credit_memosCreateWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateWithoutCustomersInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosCreateNestedManyWithoutCustomersInput = class Credit_memosCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutCustomersInput_1.Credit_memosCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateManyCustomersInputEnvelope_1.Credit_memosCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateManyCustomersInputEnvelope_1.Credit_memosCreateManyCustomersInputEnvelope)
], Credit_memosCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
Credit_memosCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosCreateNestedManyWithoutCustomersInput);
exports.Credit_memosCreateNestedManyWithoutCustomersInput = Credit_memosCreateNestedManyWithoutCustomersInput;
