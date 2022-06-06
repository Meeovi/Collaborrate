"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosUpdateInput_1 = require("../../../inputs/Credit_memosUpdateInput");
const Credit_memosWhereUniqueInput_1 = require("../../../inputs/Credit_memosWhereUniqueInput");
let UpdateCredit_memosArgs = class UpdateCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosUpdateInput_1.Credit_memosUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosUpdateInput_1.Credit_memosUpdateInput)
], UpdateCredit_memosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput)
], UpdateCredit_memosArgs.prototype, "where", void 0);
UpdateCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCredit_memosArgs);
exports.UpdateCredit_memosArgs = UpdateCredit_memosArgs;
