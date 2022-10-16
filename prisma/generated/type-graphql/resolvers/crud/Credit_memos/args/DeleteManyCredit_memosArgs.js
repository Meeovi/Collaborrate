"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
let DeleteManyCredit_memosArgs = class DeleteManyCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], DeleteManyCredit_memosArgs.prototype, "where", void 0);
DeleteManyCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCredit_memosArgs);
exports.DeleteManyCredit_memosArgs = DeleteManyCredit_memosArgs;
