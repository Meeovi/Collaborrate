"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCredit_memosArgs_1 = require("./args/DeleteCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const helpers_1 = require("../../../helpers");
let DeleteCredit_memosResolver = class DeleteCredit_memosResolver {
    async deleteCredit_memos(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCredit_memosArgs_1.DeleteCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCredit_memosResolver.prototype, "deleteCredit_memos", null);
DeleteCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], DeleteCredit_memosResolver);
exports.DeleteCredit_memosResolver = DeleteCredit_memosResolver;
