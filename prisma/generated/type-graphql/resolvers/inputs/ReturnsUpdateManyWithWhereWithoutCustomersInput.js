"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsScalarWhereInput_1 = require("../inputs/ReturnsScalarWhereInput");
const ReturnsUpdateManyMutationInput_1 = require("../inputs/ReturnsUpdateManyMutationInput");
let ReturnsUpdateManyWithWhereWithoutCustomersInput = class ReturnsUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsScalarWhereInput_1.ReturnsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsScalarWhereInput_1.ReturnsScalarWhereInput)
], ReturnsUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateManyMutationInput_1.ReturnsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateManyMutationInput_1.ReturnsUpdateManyMutationInput)
], ReturnsUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
ReturnsUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsUpdateManyWithWhereWithoutCustomersInput);
exports.ReturnsUpdateManyWithWhereWithoutCustomersInput = ReturnsUpdateManyWithWhereWithoutCustomersInput;
