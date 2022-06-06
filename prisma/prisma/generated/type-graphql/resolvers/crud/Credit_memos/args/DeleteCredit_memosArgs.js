"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
let DeleteCredit_memosArgs = class DeleteCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], DeleteCredit_memosArgs.prototype, "where", void 0);
DeleteCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCredit_memosArgs);
exports.DeleteCredit_memosArgs = DeleteCredit_memosArgs;
