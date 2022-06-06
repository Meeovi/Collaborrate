"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateWithoutProductsInput_1 = require("../inputs/Credit_memosCreateWithoutProductsInput");
const Credit_memosUpdateWithoutProductsInput_1 = require("../inputs/Credit_memosUpdateWithoutProductsInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpsertWithWhereUniqueWithoutProductsInput = class Credit_memosUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateWithoutProductsInput_1.Credit_memosUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateWithoutProductsInput_1.Credit_memosUpdateWithoutProductsInput)
], Credit_memosUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput)
], Credit_memosUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
Credit_memosUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosUpsertWithWhereUniqueWithoutProductsInput);
exports.Credit_memosUpsertWithWhereUniqueWithoutProductsInput = Credit_memosUpsertWithWhereUniqueWithoutProductsInput;
