"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUpdateWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateWithoutCustomersInput_1 = require("../inputs/CommentsUpdateWithoutCustomersInput");
const CommentsWhereUniqueInput_1 = require("../inputs/CommentsWhereUniqueInput");
let CommentsUpdateWithWhereUniqueWithoutCustomersInput = class CommentsUpdateWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], CommentsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateWithoutCustomersInput_1.CommentsUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateWithoutCustomersInput_1.CommentsUpdateWithoutCustomersInput)
], CommentsUpdateWithWhereUniqueWithoutCustomersInput.prototype, "data", void 0);
CommentsUpdateWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsUpdateWithWhereUniqueWithoutCustomersInput);
exports.CommentsUpdateWithWhereUniqueWithoutCustomersInput = CommentsUpdateWithWhereUniqueWithoutCustomersInput;
