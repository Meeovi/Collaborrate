"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosUpdateWithoutProductsInput_1 = require("../inputs/Credit_memosUpdateWithoutProductsInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpdateWithWhereUniqueWithoutProductsInput = class Credit_memosUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateWithoutProductsInput_1.Credit_memosUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateWithoutProductsInput_1.Credit_memosUpdateWithoutProductsInput)
], Credit_memosUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
Credit_memosUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosUpdateWithWhereUniqueWithoutProductsInput);
exports.Credit_memosUpdateWithWhereUniqueWithoutProductsInput = Credit_memosUpdateWithWhereUniqueWithoutProductsInput;
