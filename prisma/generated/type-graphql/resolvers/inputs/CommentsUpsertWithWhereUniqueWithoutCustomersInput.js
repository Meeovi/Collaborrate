"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateWithoutCustomersInput_1 = require("../inputs/CommentsCreateWithoutCustomersInput");
const CommentsUpdateWithoutCustomersInput_1 = require("../inputs/CommentsUpdateWithoutCustomersInput");
const CommentsWhereUniqueInput_1 = require("../inputs/CommentsWhereUniqueInput");
let CommentsUpsertWithWhereUniqueWithoutCustomersInput = class CommentsUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], CommentsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateWithoutCustomersInput_1.CommentsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateWithoutCustomersInput_1.CommentsUpdateWithoutCustomersInput)
], CommentsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsCreateWithoutCustomersInput_1.CommentsCreateWithoutCustomersInput)
], CommentsUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
CommentsUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsUpsertWithWhereUniqueWithoutCustomersInput);
exports.CommentsUpsertWithWhereUniqueWithoutCustomersInput = CommentsUpsertWithWhereUniqueWithoutCustomersInput;
