"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosScalarWhereInput_1 = require("../inputs/Credit_memosScalarWhereInput");
const Credit_memosUpdateManyMutationInput_1 = require("../inputs/Credit_memosUpdateManyMutationInput");
let Credit_memosUpdateManyWithWhereWithoutCustomersInput = class Credit_memosUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosScalarWhereInput_1.Credit_memosScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosScalarWhereInput_1.Credit_memosScalarWhereInput)
], Credit_memosUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyMutationInput_1.Credit_memosUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyMutationInput_1.Credit_memosUpdateManyMutationInput)
], Credit_memosUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
Credit_memosUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosUpdateManyWithWhereWithoutCustomersInput);
exports.Credit_memosUpdateManyWithWhereWithoutCustomersInput = Credit_memosUpdateManyWithWhereWithoutCustomersInput;
