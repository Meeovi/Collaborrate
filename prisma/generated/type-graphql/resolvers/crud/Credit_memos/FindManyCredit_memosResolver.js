"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCredit_memosArgs_1 = require("./args/FindManyCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const helpers_1 = require("../../../helpers");
let FindManyCredit_memosResolver = class FindManyCredit_memosResolver {
    async findManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Credit_memos_1.Credit_memos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCredit_memosArgs_1.FindManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCredit_memosResolver.prototype, "findManyCredit_memos", null);
FindManyCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], FindManyCredit_memosResolver);
exports.FindManyCredit_memosResolver = FindManyCredit_memosResolver;
