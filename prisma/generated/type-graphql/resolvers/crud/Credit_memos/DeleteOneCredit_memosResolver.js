"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCredit_memosArgs_1 = require("./args/DeleteOneCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const helpers_1 = require("../../../helpers");
let DeleteOneCredit_memosResolver = class DeleteOneCredit_memosResolver {
    async deleteOneCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCredit_memosArgs_1.DeleteOneCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCredit_memosResolver.prototype, "deleteOneCredit_memos", null);
DeleteOneCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], DeleteOneCredit_memosResolver);
exports.DeleteOneCredit_memosResolver = DeleteOneCredit_memosResolver;
