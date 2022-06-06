"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentsWhereUniqueInput = class CommentsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsWhereUniqueInput.prototype, "id", void 0);
CommentsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsWhereUniqueInput", {
        isAbstract: true
    })
], CommentsWhereUniqueInput);
exports.CommentsWhereUniqueInput = CommentsWhereUniqueInput;
