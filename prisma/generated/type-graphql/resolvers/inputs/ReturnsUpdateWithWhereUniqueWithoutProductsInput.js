"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsUpdateWithoutProductsInput_1 = require("../inputs/ReturnsUpdateWithoutProductsInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpdateWithWhereUniqueWithoutProductsInput = class ReturnsUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateWithoutProductsInput_1.ReturnsUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateWithoutProductsInput_1.ReturnsUpdateWithoutProductsInput)
], ReturnsUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
ReturnsUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsUpdateWithWhereUniqueWithoutProductsInput);
exports.ReturnsUpdateWithWhereUniqueWithoutProductsInput = ReturnsUpdateWithWhereUniqueWithoutProductsInput;
