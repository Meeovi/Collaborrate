"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyProductsInputEnvelope_1 = require("../inputs/Credit_memosCreateManyProductsInputEnvelope");
const Credit_memosCreateOrConnectWithoutProductsInput_1 = require("../inputs/Credit_memosCreateOrConnectWithoutProductsInput");
const Credit_memosCreateWithoutProductsInput_1 = require("../inputs/Credit_memosCreateWithoutProductsInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosCreateNestedManyWithoutProductsInput = class Credit_memosCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutProductsInput_1.Credit_memosCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateManyProductsInputEnvelope_1.Credit_memosCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateManyProductsInputEnvelope_1.Credit_memosCreateManyProductsInputEnvelope)
], Credit_memosCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
Credit_memosCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosCreateNestedManyWithoutProductsInput);
exports.Credit_memosCreateNestedManyWithoutProductsInput = Credit_memosCreateNestedManyWithoutProductsInput;
