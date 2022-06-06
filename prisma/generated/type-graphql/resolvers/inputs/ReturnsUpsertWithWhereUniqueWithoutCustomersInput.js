"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateWithoutCustomersInput_1 = require("../inputs/ReturnsCreateWithoutCustomersInput");
const ReturnsUpdateWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateWithoutCustomersInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpsertWithWhereUniqueWithoutCustomersInput = class ReturnsUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ReturnsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateWithoutCustomersInput_1.ReturnsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateWithoutCustomersInput_1.ReturnsUpdateWithoutCustomersInput)
], ReturnsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput)
], ReturnsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
ReturnsUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsUpsertWithWhereUniqueWithoutCustomersInput);
exports.ReturnsUpsertWithWhereUniqueWithoutCustomersInput = ReturnsUpsertWithWhereUniqueWithoutCustomersInput;
