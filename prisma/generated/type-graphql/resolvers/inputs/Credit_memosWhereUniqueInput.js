"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const credit_memosCredit_memoIdCompoundUniqueInput_1 = require("../inputs/credit_memosCredit_memoIdCompoundUniqueInput");
let Credit_memosWhereUniqueInput = class Credit_memosWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => credit_memosCredit_memoIdCompoundUniqueInput_1.credit_memosCredit_memoIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", credit_memosCredit_memoIdCompoundUniqueInput_1.credit_memosCredit_memoIdCompoundUniqueInput)
], Credit_memosWhereUniqueInput.prototype, "credit_memo_id", void 0);
Credit_memosWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosWhereUniqueInput", {
        isAbstract: true
    })
], Credit_memosWhereUniqueInput);
exports.Credit_memosWhereUniqueInput = Credit_memosWhereUniqueInput;
