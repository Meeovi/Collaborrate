"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
let DeleteOneCredit_memosArgs = class DeleteOneCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], DeleteOneCredit_memosArgs.prototype, "where", void 0);
DeleteOneCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCredit_memosArgs);
exports.DeleteOneCredit_memosArgs = DeleteOneCredit_memosArgs;
