"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateInput_1 = require("../../../inputs/Credit_memosCreateInput");
const Credit_memosUpdateInput_1 = require("../../../inputs/Credit_memosUpdateInput");
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
let UpsertOneCredit_memosArgs = class UpsertOneCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], UpsertOneCredit_memosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateInput_1.Credit_memosCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateInput_1.Credit_memosCreateInput)
], UpsertOneCredit_memosArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateInput_1.Credit_memosUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateInput_1.Credit_memosUpdateInput)
], UpsertOneCredit_memosArgs.prototype, "update", void 0);
UpsertOneCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCredit_memosArgs);
exports.UpsertOneCredit_memosArgs = UpsertOneCredit_memosArgs;
