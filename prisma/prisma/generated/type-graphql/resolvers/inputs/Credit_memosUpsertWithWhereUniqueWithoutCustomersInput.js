"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateWithoutCustomersInput");
const Credit_memosUpdateWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateWithoutCustomersInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpsertWithWhereUniqueWithoutCustomersInput = class Credit_memosUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateWithoutCustomersInput_1.Credit_memosUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateWithoutCustomersInput_1.Credit_memosUpdateWithoutCustomersInput)
], Credit_memosUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput)
], Credit_memosUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
Credit_memosUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosUpsertWithWhereUniqueWithoutCustomersInput);
exports.Credit_memosUpsertWithWhereUniqueWithoutCustomersInput = Credit_memosUpsertWithWhereUniqueWithoutCustomersInput;
