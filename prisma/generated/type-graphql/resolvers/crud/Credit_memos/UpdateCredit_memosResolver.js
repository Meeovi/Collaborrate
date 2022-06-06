"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCredit_memosArgs_1 = require("./args/UpdateCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const helpers_1 = require("../../../helpers");
let UpdateCredit_memosResolver = class UpdateCredit_memosResolver {
    async updateCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCredit_memosArgs_1.UpdateCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCredit_memosResolver.prototype, "updateCredit_memos", null);
UpdateCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], UpdateCredit_memosResolver);
exports.UpdateCredit_memosResolver = UpdateCredit_memosResolver;
