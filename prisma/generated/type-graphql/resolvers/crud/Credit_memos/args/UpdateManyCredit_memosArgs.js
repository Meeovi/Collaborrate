"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosUpdateManyMutationInput_1 = require("../../../inputs/Credit_memosUpdateManyMutationInput");
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
let UpdateManyCredit_memosArgs = class UpdateManyCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateManyMutationInput_1.Credit_memosUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateManyMutationInput_1.Credit_memosUpdateManyMutationInput)
], UpdateManyCredit_memosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], UpdateManyCredit_memosArgs.prototype, "where", void 0);
UpdateManyCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCredit_memosArgs);
exports.UpdateManyCredit_memosArgs = UpdateManyCredit_memosArgs;
