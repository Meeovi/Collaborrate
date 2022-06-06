"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsUpdateManyWithWhereWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsScalarWhereInput_1 = require("../inputs/CommentsScalarWhereInput");
const CommentsUpdateManyMutationInput_1 = require("../inputs/CommentsUpdateManyMutationInput");
let CommentsUpdateManyWithWhereWithoutCustomersInput = class CommentsUpdateManyWithWhereWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsScalarWhereInput_1.CommentsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsScalarWhereInput_1.CommentsScalarWhereInput)
], CommentsUpdateManyWithWhereWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateManyMutationInput_1.CommentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateManyMutationInput_1.CommentsUpdateManyMutationInput)
], CommentsUpdateManyWithWhereWithoutCustomersInput.prototype, "data", void 0);
CommentsUpdateManyWithWhereWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsUpdateManyWithWhereWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsUpdateManyWithWhereWithoutCustomersInput);
exports.CommentsUpdateManyWithWhereWithoutCustomersInput = CommentsUpdateManyWithWhereWithoutCustomersInput;
