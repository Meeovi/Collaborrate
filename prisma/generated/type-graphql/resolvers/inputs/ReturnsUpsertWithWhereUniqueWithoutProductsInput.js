"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateWithoutProductsInput_1 = require("../inputs/ReturnsCreateWithoutProductsInput");
const ReturnsUpdateWithoutProductsInput_1 = require("../inputs/ReturnsUpdateWithoutProductsInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpsertWithWhereUniqueWithoutProductsInput = class ReturnsUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateWithoutProductsInput_1.ReturnsUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateWithoutProductsInput_1.ReturnsUpdateWithoutProductsInput)
], ReturnsUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput)
], ReturnsUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
ReturnsUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsUpsertWithWhereUniqueWithoutProductsInput);
exports.ReturnsUpsertWithWhereUniqueWithoutProductsInput = ReturnsUpsertWithWhereUniqueWithoutProductsInput;
