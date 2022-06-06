"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsUpdateWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateWithoutCustomersInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpdateWithWhereUniqueWithoutCustomersInput = class ReturnsUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateWithoutCustomersInput_1.ReturnsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateWithoutCustomersInput_1.ReturnsUpdateWithoutCustomersInput)
], ReturnsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
ReturnsUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsUpdateWithWhereUniqueWithoutCustomersInput);
exports.ReturnsUpdateWithWhereUniqueWithoutCustomersInput = ReturnsUpdateWithWhereUniqueWithoutCustomersInput;
