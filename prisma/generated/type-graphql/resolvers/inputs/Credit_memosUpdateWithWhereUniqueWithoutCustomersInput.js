"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosUpdateWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateWithoutCustomersInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpdateWithWhereUniqueWithoutCustomersInput = class Credit_memosUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], Credit_memosUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateWithoutCustomersInput_1.Credit_memosUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateWithoutCustomersInput_1.Credit_memosUpdateWithoutCustomersInput)
], Credit_memosUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
Credit_memosUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosUpdateWithWhereUniqueWithoutCustomersInput);
exports.Credit_memosUpdateWithWhereUniqueWithoutCustomersInput = Credit_memosUpdateWithWhereUniqueWithoutCustomersInput;
