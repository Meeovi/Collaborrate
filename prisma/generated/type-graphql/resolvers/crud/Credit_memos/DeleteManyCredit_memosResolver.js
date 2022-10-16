"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCredit_memosArgs_1 = require("./args/DeleteManyCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCredit_memosResolver = class DeleteManyCredit_memosResolver {
    async deleteManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCredit_memosArgs_1.DeleteManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCredit_memosResolver.prototype, "deleteManyCredit_memos", null);
DeleteManyCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], DeleteManyCredit_memosResolver);
exports.DeleteManyCredit_memosResolver = DeleteManyCredit_memosResolver;
